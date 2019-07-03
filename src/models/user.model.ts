import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';

@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Column('text')
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Column('text')
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Column('text')
    email: string;

    @IsString()
    @Column('text')
    @MinLength(6)
    @Exclude({ toPlainOnly: true })
    password: string;

    /**
     * Hashes and sets the password of the user
     * @param rawPassword The raw password string
     */
    async setPassword(rawPassword: string) {
        const hash = await bcrypt.hash(rawPassword, 10);
        this.password = hash;
    }

    /**
     * Compares the password
     * @param rawPassword The raw password string
     */
    checkPassword(rawPassword: string): Promise<boolean> {
        return bcrypt.compare(rawPassword, this.password);
    }
}