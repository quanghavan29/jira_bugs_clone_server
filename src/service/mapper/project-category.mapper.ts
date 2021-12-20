import { ProjectCategory } from '../../domain/project-category.entity';
import { ProjectCategoryDTO } from '../dto/project-category.dto';

/**
 * An Project Category mapper object.
 */
export class ProjectCategoryMapper {
    static fromDTOtoEntity(projectCategoryDTO: ProjectCategoryDTO): ProjectCategory {
        if (!projectCategoryDTO) {
            return;
        }
        const projectCategory = new ProjectCategory();
        const fields = Object.getOwnPropertyNames(projectCategoryDTO);
        fields.forEach(field => {
            projectCategory[field] = projectCategoryDTO[field];
        });
        return projectCategory;
    }

    static fromEntityToDTO(projectCategory: ProjectCategory): ProjectCategoryDTO {
        if (!projectCategory) {
            return;
        }
        const projectCategoryDTO = new ProjectCategoryDTO();

        const fields = Object.getOwnPropertyNames(projectCategory);

        fields.forEach(field => {
            projectCategoryDTO[field] = projectCategory[field];
        });

        return projectCategoryDTO;
    }
}
