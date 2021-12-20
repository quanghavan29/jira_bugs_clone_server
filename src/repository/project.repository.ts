import { Project } from '../domain/project.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
