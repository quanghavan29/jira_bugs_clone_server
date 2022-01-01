import { ApiModelProperty } from '@nestjs/swagger';
import { ProjectCategoryDTO } from './project-category.dto';
import { BaseDTO } from './base.dto';
import { UserDTO } from './user.dto';
import { ProjectDTO } from './project.dto';
import { CommentDTO } from './comment.dto';

/**
 * An Task DTO object.
 */
export class TaskDTO extends BaseDTO {

    @ApiModelProperty({ example: 'MyTaskTitle', description: 'Task title', required: false })
    title?: string;

    @ApiModelProperty({ example: 'MyTaskName', description: 'Task name', required: false })
    name?: string;

    @ApiModelProperty({ example: 'MyDescription', description: 'Task description', required: false })
    description?: string;

    @ApiModelProperty({ type: ProjectDTO, description: 'Project Category DTO object', required: false })
    project?: ProjectDTO;

    @ApiModelProperty({
        isArray: true,
        type: UserDTO,
        description: 'List users assign', required: false
    })
    usersAssign?: UserDTO[];

    @ApiModelProperty({ example: 'DONE', description: 'Task status', required: false })
    status?: string;

    @ApiModelProperty({ example: 2, description: 'Time tracking spent', required: false })
    timeTrackingSpent?: number;
    
    @ApiModelProperty({ example: 10, description: 'Time tracking remaining', required: false })
    timeTrackingRemaining?: number;

    @ApiModelProperty({ example: 'Bugs', description: 'Task type', required: false })
    type?: string;

    @ApiModelProperty({ example: 'High', description: 'Priority', required: false })
    priority?: string;

    @ApiModelProperty({ example: 5, description: 'Original Estimate', required: false })
    originalEstimate?: number;

    @ApiModelProperty({
        isArray: true,
        type: CommentDTO,
        description: 'List comment of task', required: false
    })
    comments?: CommentDTO[];
}
