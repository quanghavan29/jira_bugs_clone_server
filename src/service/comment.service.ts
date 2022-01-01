import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions } from 'typeorm';
import { CommentRepository } from '../repository/comment.repository';
import { CommentDTO } from './dto/comment.dto';
import { CommentMapper } from './mapper/comment.mapper';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentRepository) private commentRepository: CommentRepository) { }

    async save(commentDTO: CommentDTO): Promise<CommentDTO | undefined> {
        const newComment = CommentMapper.fromDTOtoEntity(commentDTO);

        const commentCreated = await this.commentRepository.save(newComment);

        return CommentMapper.fromEntityToDTO(commentCreated);
    }

    async findById(id: number): Promise<CommentDTO | undefined> {
        const result = await this.commentRepository.findOne({
            where: {
                id: id,
            }
        });

        return CommentMapper.fromEntityToDTO(result);
    }

    async findAllByTask(taskId: number): Promise<CommentDTO[] | undefined> {
        const result = await this.commentRepository.find({
            where: {
                task: {
                    id: taskId,
                }
            },
            relations: ['user'],
        });
        const commentsDTO: CommentDTO[] = []
        result.forEach(comment => commentsDTO.push(CommentMapper.fromEntityToDTO(comment)));

        return commentsDTO;
    }

    async update(commentDTO: CommentDTO): Promise<any | undefined> {
        let projectToUpdate = CommentMapper.fromDTOtoEntity(commentDTO);

        const projectUpdated = await this.commentRepository.save(projectToUpdate);

        return CommentMapper.fromEntityToDTO(projectUpdated);
    }

    async delete(id: number): Promise<CommentDTO | undefined> {
        let commentToDelete = await this.findById(id);
        const commentDeleted = await this.commentRepository.remove(commentToDelete);

        return CommentMapper.fromEntityToDTO(commentDeleted);
    }
}
