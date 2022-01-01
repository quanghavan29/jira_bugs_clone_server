import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';
import { UserDTO } from './user.dto';
import { TaskDTO } from './task.dto';

/**
 * An Comment DTO object.
 */
export class CommentDTO extends BaseDTO {

    @ApiModelProperty({ example: 'MyComment', description: 'Comment content', required: true })
    content?: string;


    @ApiModelProperty({ type: UserDTO, description: 'User DTO object', required: false })
    user?: UserDTO;


    @ApiModelProperty({ type: TaskDTO, description: 'Task DTO object', required: false })
    task?: TaskDTO; 

}
