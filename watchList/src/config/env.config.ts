import type { ZodObject, ZodRawShape } from "zod";
import { z } from "zod";
import "dotenv/config" 

interface EnvOptions {
  source?: NodeJS.ProcessEnv;
  serviceName?: string;
}

type SchemaOutput<TSchema extends ZodRawShape> = z.output<ZodObject<TSchema>>;


export function createEnv<Tschema extends ZodRawShape>(schema:ZodObject<Tschema>, options:EnvOptions ):SchemaOutput<Tschema>{
   
    const {source = process.env, serviceName} = options

    const parsedEnv = schema.safeParse(source)
    if(!parsedEnv.success){
            const formatedErrors = parsedEnv.error.format();

        console.error(`❌ Invalid environment variables for ${serviceName || "the service"}`);
        console.error(formatedErrors)
        process.exit(1)
    }
    return parsedEnv.data


}


const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  WATCHLIST_SERVICE_PORT: z.coerce.number().int().min(0).max(65_535).default(4001),
  DBHOST: z.string(),
  DBPORT:z.string(),
  DBUSER:z.string(),
  DBPASSWORD: z.string(),
  DBNAME: z.string()
});


type EnvType = z.infer<typeof envSchema>;

export const env: EnvType = createEnv(envSchema, {
  serviceName: 'watch_list-service',
});

export type Env = typeof env;





export type EnvSchema<TShape extends ZodRawShape> = ZodObject<TShape>;