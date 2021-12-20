import { Project } from '../../domain/project.entity';
import { ProjectDTO } from '../dto/project.dto';

/**
 * An Project mapper object.
 */
export class ProjectMapper {
    static fromDTOtoEntity(projectDTO: ProjectDTO): Project {
        if (!projectDTO) {
            return;
        }
        const project = new Project();
        const fields = Object.getOwnPropertyNames(projectDTO);
        fields.forEach(field => {
            project[field] = projectDTO[field];
        });
        return project;
    }

    static fromEntityToDTO(project: Project): ProjectDTO {
        if (!project) {
            return;
        }
        const projectDTO = new ProjectDTO();

        const fields = Object.getOwnPropertyNames(project);

        fields.forEach(field => {
            projectDTO[field] = project[field];
        });

        return projectDTO;
    }
}
