import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { Project } from "./project.entity";

@Entity('project_category')
export class ProjectCategory extends BaseEntity {
    @Column({unique: true})
    name: string;

    @OneToMany(() => Project, project => project.projectCategory)
    projects?: Project[];
}