import { Task } from '../../domain/task.entity';
import { TaskDTO } from '../dto/task.dto';

/**
 * An Task mapper object.
 */
export class TaskMapper {
    static fromDTOtoEntity(taskDTO: TaskDTO): Task {
        if (!taskDTO) {
            return;
        }
        const task = new Task();
        const fields = Object.getOwnPropertyNames(taskDTO);
        fields.forEach(field => {
            task[field] = taskDTO[field];
        });
        return task;
    }

    static fromEntityToDTO(task: Task): TaskDTO {
        if (!task) {
            return;
        }
        const taskDTO = new TaskDTO();

        const fields = Object.getOwnPropertyNames(task);

        fields.forEach(field => {
            taskDTO[field] = task[field];
        });

        return taskDTO;
    }
}
