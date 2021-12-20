import { ApiModelProperty } from '@nestjs/swagger';
import { ProjectDTO } from './project.dto';
import { BaseDTO } from './base.dto';

/**
 * An Project Category DTO object.
 */
export class ProjectCategoryDTO extends BaseDTO{

    @ApiModelProperty({ example: 'MyProjectCategory', description: 'Project category name', required: false })
    name: string;

    @ApiModelProperty({ isArray: true, enum: [], description: 'Array of projects', required: false })
    projects?: ProjectDTO[];
}
