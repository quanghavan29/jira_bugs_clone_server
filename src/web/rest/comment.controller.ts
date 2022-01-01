import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post,
    Put,
    UseGuards,
    Req,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { UserDTO } from '../../service/dto/user.dto';
import { HeaderUtil } from '../../client/header-util';
import { Request } from '../../client/request';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CommentService } from '../../service/comment.service';
import { CommentDTO } from '../../service/dto/comment.dto';

@Controller('api/comment')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('comment-resource')
export class CommentController {
    logger = new Logger('CommentController');

    constructor(private readonly commentService: CommentService) {}

    @Post('/create-comment')
    @Roles(RoleType.USER)
    @ApiOperation({ title: 'Create comment' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CommentDTO,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createTask(@Body() commentDTO: CommentDTO): Promise<CommentDTO | undefined> {
        const commentCreated = await this.commentService.save(commentDTO);
        
        return commentCreated;
    }

    @Put('/update')
    @Roles(RoleType.USER)
    @ApiOperation({ title: 'Update comment' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CommentDTO,
    })
    async updateProject(@Body() commentDTO: CommentDTO): Promise<CommentDTO | undefined> {
        const commentUpdated = await this.commentService.update(commentDTO);

        return commentUpdated;
    }

    @Delete('/delete')
    @Roles(RoleType.USER)
    @ApiOperation({ title: 'Delete comment' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
        type: CommentDTO,
    })
    async deleteComment(@Req() req: Request): Promise<CommentDTO | undefined> {
        const commentId = req.query.id;
        const commentDeleted = await this.commentService.delete(commentId);

        return commentDeleted;
    }

}
