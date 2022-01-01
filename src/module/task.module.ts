import { Module } from '@nestjs/common';
import { ManagementController } from '../web/rest/management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from '../repository/task.repository';
import { TaskController } from '../web/rest/task.controller';
import { TaskService } from '../service/task.service';
import { CommentModule } from './comment.module';


@Module({
    imports: [TypeOrmModule.forFeature([TaskRepository]), CommentModule],
    controllers: [TaskController, ManagementController],
    providers: [TaskService],
    exports: [TaskService],
})
export class TaskModule {}
