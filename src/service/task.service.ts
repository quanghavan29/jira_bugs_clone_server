import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';
import { TaskRepository } from '../repository/task.repository';
import { TaskDTO } from './dto/task.dto';
import { TaskMapper } from './mapper/task.mapper';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskRepository) private taskRepository: TaskRepository) { }

    async save(taskDTO: TaskDTO): Promise<TaskDTO | undefined> {
        const newTask = TaskMapper.fromDTOtoEntity(taskDTO);

        const taskCreated = await this.taskRepository.save(newTask);

        return TaskMapper.fromEntityToDTO(taskCreated);
    }

    async findAll(options: FindManyOptions<TaskDTO>): Promise<TaskDTO[] | undefined> {
        const result = await this.taskRepository.find(options);
        const tasksDTO: TaskDTO[] = [];

        result.forEach((taskEntity) => tasksDTO.push(TaskMapper.fromEntityToDTO(taskEntity)));

        return tasksDTO;
    }

    async findOne(options: FindManyOptions<TaskDTO>): Promise<TaskDTO | undefined> {
        const result = await this.taskRepository.findOne(options);

        return TaskMapper.fromEntityToDTO(result);
    }

    async findById(id: number): Promise<TaskDTO | undefined> {
        const result = await this.taskRepository.findOne({
            relations: ['project', 'usersAssign'],
            where: {
                id: id,
            }
        });

        return TaskMapper.fromEntityToDTO(result);
    }

    async update(taskDTO: TaskDTO): Promise<TaskDTO | undefined> {
        const taskUpdate = TaskMapper.fromDTOtoEntity(taskDTO);

        const {id} = await this.taskRepository.save(taskUpdate);

        const taskUpdated = await this.findById(id);

        return TaskMapper.fromEntityToDTO(taskUpdated);
    }

}
