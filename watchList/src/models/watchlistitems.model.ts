import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WatchList } from "./watchlist.model";

@Entity()
export class WatchListItems extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  symbol: string;

  @Column()
  exchange: string

  @Column()
  watchListId: number
  // Relation: Many items belong to one watchlist

  @ManyToOne(() => WatchList)
  @JoinColumn({ name: "watchListId", referencedColumnName: "id" })
  watchlist: WatchList;

}
