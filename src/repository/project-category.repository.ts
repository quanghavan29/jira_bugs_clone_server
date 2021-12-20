import { ProjectCategory } from '../domain/project-category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProjectCategory)
export class ProjectCategoryRepository extends Repository<ProjectCategory> {}
