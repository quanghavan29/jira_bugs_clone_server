import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true, default: 'System' })
    createdBy?: string;
    @Column({ nullable: true, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdDate?: Date;
    @Column({ nullable: true, default: 'System' })
    lastModifiedBy?: string;
    @Column({ nullable: true, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    lastModifiedDate?: Date;
}
