import { ApiModelProperty } from '@nestjs/swagger';
import { ProjectCategoryDTO } from './project-category.dto';
import { BaseDTO } from './base.dto';

/**
 * An Project Category DTO object.
 */
export class ProjectDTO extends BaseDTO{

    @ApiModelProperty({ example: 'MyProject', description: 'Project name', required: true })
    name: string;

    @ApiModelProperty({ example: 'http://my-project-url', description: 'Project url', required: false })
    url?: string;

    @ApiModelProperty({ example: 'MyDescription', description: 'Project description', required: false })
    description?: string;

    @ApiModelProperty({ example: 'MyProjectCategoryDTO', description: 'Project Category DTO object', required: false })
    projectCategory: ProjectCategoryDTO;

}
