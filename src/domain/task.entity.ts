import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Comment } from "./comment.entity";
import { ProjectCategory } from "./project-category.entity";
import { Project } from "./project.entity";
import { User } from "./user.entity";

@Entity('task')
export class Task extends BaseEntity {
    @Column("longtext", {nullable: true})
    title?: string;

    @Column("longtext", {nullable: true})
    name?: string;

    @Column("longtext", {nullable: true})
    description?: string;

    @ManyToOne(() => Project, project => project.tasks)
    project?: Project;

    @ManyToMany(() => User)
    @JoinTable({name: 'users_assign'})
    usersAssign?: User[];

    @Column({default: 'BACKLOG'})
    status?: string;

    @Column({default: 0})
    timeTrackingSpent?: number;

    @Column({default: 0})
    timeTrackingRemaining?: number;

    @Column({default: 'NEW TASK'})
    type?: string;

    @Column({default: 'LOW'})
    priority?: string;

    @Column({default: 0})
    originalEstimate?: number;

    @OneToMany(() => Comment, comment => comment.task)
    comments?: Comment[];

}