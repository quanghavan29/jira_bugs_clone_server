import { Module } from '@nestjs/common';
import { ManagementController } from '../web/rest/management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { CommentController } from '../web/rest/comment.controller';
import { CommentService } from '../service/comment.service';

@Module({
    imports: [TypeOrmModule.forFeature([CommentRepository])],
    controllers: [CommentController, ManagementController],
    providers: [CommentService],
    exports: [CommentService],
})
export class CommentModule {}
