import express, { Application } from 'express';
import { initDatabase } from './config/db.config';
import { createApp } from './app';
import { createServer } from 'node:http';

import { env } from './config/env.config';

async function main() {
     initDatabase()
    const app: Application = createApp()
    const server = createServer(app)
    server.listen(env.WATCHLIST_SERVICE_PORT, () => {
        console.log(`Server is running on port ${env.WATCHLIST_SERVICE_PORT}`);
    })
    const shutdown = () => {
        console.log("Shutting down the services gracefully...");
        Promise.all([
            
            // add functions to stop services like stop socket server and stop redis server e.tc
        ]).catch((err: unknown) => console.log("error occured during shutdown  the services", err))
            .finally(() =>
                server.close(() => process.exit(0))
            )
    }
    process.on("SIGINT", shutdown)
    process.on("SIGTERM", shutdown)
}

main()







