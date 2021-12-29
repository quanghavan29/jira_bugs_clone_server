import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Not } from 'typeorm';
import { ProjectRepository } from '../repository/project.repository';
import { ProjectDTO } from './dto/project.dto';
import { UserDTO } from './dto/user.dto';
import { ProjectMapper } from './mapper/project.mapper';
import { UserMapper } from './mapper/user.mapper';

@Injectable()
export class ProjectService {
    constructor(@InjectRepository(ProjectRepository) private projectRepository: ProjectRepository) { }

    async save(projectDTO: ProjectDTO): Promise<any | undefined> {
        const newPoject = ProjectMapper.fromDTOtoEntity(projectDTO);
        let projectFind: ProjectDTO = await this.findByName(newPoject.name);
        if (projectFind) {
            return {
                status: HttpStatus.BAD_REQUEST,
                message: 'Project name already exist!',
            }
        }

        const projectCreated = await this.projectRepository.save(newPoject);

        return ProjectMapper.fromEntityToDTO(projectCreated);
    }

    async findAll(): Promise<ProjectDTO[] | undefined> {
        const result = await this.projectRepository.find({ relations: ['projectCategory', 'members'] });
        const projectsDTO: ProjectDTO[] = [];

        result.forEach((project) => projectsDTO.push(ProjectMapper.fromEntityToDTO(project)));

        return projectsDTO;
    }

    async findAllByOptions(options: FindManyOptions<ProjectDTO>): Promise<ProjectDTO[] | undefined> {
        const result = await this.projectRepository.find(options);
        const projectsDTO: ProjectDTO[] = [];

        result.forEach((project) => projectsDTO.push(ProjectMapper.fromEntityToDTO(project)));

        return projectsDTO;
    }

    async findById(id: number): Promise<ProjectDTO | undefined> {
        const result = await this.projectRepository.findOne({
            relations: ['projectCategory', 'members'],
            where: {
                id: id,
            }
        });

        return ProjectMapper.fromEntityToDTO(result);
    }

    async findByName(name: string): Promise<ProjectDTO | undefined> {
        const projectFind = await this.projectRepository.findOne({ name: name });

        return ProjectMapper.fromEntityToDTO(projectFind);
    }

    async findByNameNotId(name: string, id: number): Promise<ProjectDTO | undefined> {
        const projectFind = await this.projectRepository.findOne({
            where: {
                name: name,
                id: Not(id),
            }
        });

        return ProjectMapper.fromEntityToDTO(projectFind);
    }

    async update(projectDTO: ProjectDTO): Promise<any | undefined> {
        let projectUpdate = ProjectMapper.fromDTOtoEntity(projectDTO);
        let projectFind: ProjectDTO = await this.findByNameNotId(projectUpdate.name, projectUpdate.id);
        if (projectFind) {
            return {
                status: HttpStatus.BAD_REQUEST,
                message: 'Project name already exist!',
            }
        }

        const projectUpdated = await this.projectRepository.save(projectDTO);

        return ProjectMapper.fromEntityToDTO(projectUpdated);
    }

    async delete(id: number): Promise<ProjectDTO | undefined> {
        let projectToDelete = await this.findById(id);
        const projectDeleted = await this.projectRepository.remove(projectToDelete);

        return ProjectMapper.fromEntityToDTO(projectDeleted);
    }

    async listMembers(projectId: number): Promise<UserDTO[] | undefined> {
        const result = await this.findById(projectId);
        const usersDTO: UserDTO[] = [];
        result.members?.forEach(user => usersDTO.push(UserMapper.fromEntityToDTO(user)));
        
        return usersDTO;
    }


}
