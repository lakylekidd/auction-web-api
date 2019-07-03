import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, IsNumber, IsNotEmpty, IsEmail } from 'class-validator'

//Class Advertisement takes as property's id, title, description, pictureUrl, price, email, userId
//id = type number
//title = type string
//description = type string
//pictureUrl = type string
//price = type float
//email = type string
//userId = type number?

@Entity()
export default class Advertisement extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @Length(5, 30)
    @Column('text')
    title: string

    @IsString()
    @Length(10, 200)
    @Column('text')
    description: string

    @IsString()
    @Column('text')
    pictureUrl: string

    @IsNumber()
    @IsNotEmpty()
    @Column('number')
    price: number

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Column('text')
    email: string

    @IsNumber()
    @Column('number')
    userId: number | null
}