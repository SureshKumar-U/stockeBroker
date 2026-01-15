import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WatchListItems } from "./watchlistitems.model";



@Entity()
export class WatchList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    // Relation: One watchlist has many items
    @OneToMany(() => WatchListItems, item => item.watchlist, {
        cascade: true,  // optional: automatically insert items with watchlist
    })
    items: WatchListItems[];


}


