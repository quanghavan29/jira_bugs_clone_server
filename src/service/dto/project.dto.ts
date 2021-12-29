import { ApiModelProperty } from '@nestjs/swagger';
import { ProjectCategoryDTO } from './project-category.dto';
import { BaseDTO } from './base.dto';
import { UserDTO } from './user.dto';
import { TaskDTO } from './task.dto';

/**
 * An Project DTO object.
 */
export class ProjectDTO extends BaseDTO {

    @ApiModelProperty({ example: 'MyProject', description: 'Project name', required: true })
    name: string;

    @ApiModelProperty({ example: 'http://my-project-url', description: 'Project url', required: false })
    url?: string;

    @ApiModelProperty({ example: 'MyDescription', description: 'Project description', required: false })
    description?: string;

    @ApiModelProperty({ type: ProjectCategoryDTO, description: 'Project Category DTO object', required: false })
    projectCategory: ProjectCategoryDTO;

    @ApiModelProperty({
        isArray: true,
        type: UserDTO,
        description: 'List members', required: false
    })
    members?: UserDTO[];

    @ApiModelProperty({
        isArray: true,
        type: TaskDTO,
        description: 'List tasks', required: false
    })
    tasks?: TaskDTO[];

}
