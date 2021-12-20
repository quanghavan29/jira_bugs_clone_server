import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectCategoryRepository } from '../repository/project-category.repository';
import { ProjectCategoryDTO } from './dto/project-category.dto';
import { ProjectCategoryMapper } from './mapper/project-category.mapper';

@Injectable()
export class ProjectCategoryService {
    constructor(@InjectRepository(ProjectCategoryRepository) private projectCategoryRepository: ProjectCategoryRepository) { }

    async findAll(): Promise<ProjectCategoryDTO[] | undefined> {
        const result = await this.projectCategoryRepository.find();
        const projectCategoriesDTO: ProjectCategoryDTO[] = []
        result.forEach(projectCategory => projectCategoriesDTO.push(ProjectCategoryMapper.fromEntityToDTO(projectCategory)));

        return projectCategoriesDTO;
    }

}
