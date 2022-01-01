import { Comment } from '../../domain/comment.entity';
import { CommentDTO } from '../dto/comment.dto';

/**
 * An Comment mapper object.
 */
export class CommentMapper {
    static fromDTOtoEntity(commentDTO: CommentDTO): Comment {
        if (!commentDTO) {
            return;
        }
        const comment = new Comment();
        const fields = Object.getOwnPropertyNames(commentDTO);
        fields.forEach(field => {
            comment[field] = commentDTO[field];
        });
        return comment;
    }

    static fromEntityToDTO(comment: Comment): CommentDTO {
        if (!comment) {
            return;
        }
        const commentDTO = new CommentDTO();

        const fields = Object.getOwnPropertyNames(comment);

        fields.forEach(field => {
            commentDTO[field] = comment[field];
        });

        return commentDTO;
    }
}
