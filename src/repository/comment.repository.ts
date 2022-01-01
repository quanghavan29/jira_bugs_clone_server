import { EntityRepository, Repository } from 'typeorm';
import { Comment } from '../domain/comment.entity';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {}
