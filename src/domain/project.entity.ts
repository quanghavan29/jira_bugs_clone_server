import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base/base.entity";
import { ProjectCategory } from "./project-category.entity";
import { User } from "./user.entity";

@Entity('project')
export class Project extends BaseEntity {
    @Column({ unique: true })
    name: string;

    @Column()
    url?: string;

    @Column()
    description?: string;

    @ManyToOne(() => ProjectCategory, projectCategory => projectCategory.projects)
    projectCategory: ProjectCategory;
}