import { Module } from '@nestjs/common';
import { ManagementController } from '../web/rest/management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectCategoryRepository } from '../repository/project-category.repository';
import { ProjectCategoryController } from '../web/rest/project-category.controller';
import { ProjectCategoryService } from '../service/project-category.service';


@Module({
    imports: [TypeOrmModule.forFeature([ProjectCategoryRepository])],
    controllers: [ProjectCategoryController, ManagementController],
    providers: [ProjectCategoryService],
    exports: [ProjectCategoryService],
})
export class ProjectCategoryModule {}
