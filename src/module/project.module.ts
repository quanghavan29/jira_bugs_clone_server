import { Module } from '@nestjs/common';
import { ManagementController } from '../web/rest/management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectRepository } from '../repository/project.repository';
import { ProjectController } from '../web/rest/project.controller';
import { ProjectService } from '../service/project.service';


@Module({
    imports: [TypeOrmModule.forFeature([ProjectRepository])],
    controllers: [ProjectController, ManagementController],
    providers: [ProjectService],
    exports: [ProjectService],
})
export class ProjectModule {}
