import { Project } from '../domain/project.entity';
import { EntityRepository, getConnection, Repository } from 'typeorm';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
