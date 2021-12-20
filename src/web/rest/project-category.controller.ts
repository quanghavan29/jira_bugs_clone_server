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
import { UserService } from '../../service/user.service';
import { ProjectCategoryDTO } from '../../service/dto/project-category.dto';
import { ProjectCategoryService } from '../../service/project-category.service';

@Controller('api/project-category')
// @UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
@ApiUseTags('project-category-resource')
export class ProjectCategoryController {
    logger = new Logger('ProjectCategoryController');

    constructor(private readonly projectCategoyService: ProjectCategoryService) {}

    @Get('/get-all')
    // @Roles(RoleType.ADMIN)
    @ApiOperation({ title: 'Get the list of project categories' })
    @ApiResponse({
        status: 200,
        description: 'List all project categories',
        type: ProjectCategoryDTO,
    })
    async getAllProjectCategories(): Promise<ProjectCategoryDTO[]> {
        return this.projectCategoyService.findAll();
    }

}
