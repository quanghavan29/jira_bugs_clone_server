import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Task } from "./task.entity";
import { User } from "./user.entity";

@Entity('comment')
export class Comment extends BaseEntity {
    @Column("longtext", {nullable: true})
    content?: string;

    @ManyToOne(() => User)
    user?: User;

    @ManyToOne(() => Task, task => task.comments)
    task?: Task; 
}