import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WatchList } from "./watchlist.model";

@Entity()
export class WatchListItems extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    symbol:string;

    @Column()
    exchange:string

  // Relation: Many items belong to one watchlist
  @ManyToOne(() => WatchList, watchlist => watchlist.items, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'watchlist_id' })
  watchlist: WatchList;

}
