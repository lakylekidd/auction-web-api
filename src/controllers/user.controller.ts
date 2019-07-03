import { getCustomRepository } from 'typeorm';
import {
    JsonController, Get, Param, Put, Body,
    HttpCode, Post, NotFoundError, Authorized, BadRequestError
} from 'routing-controllers';
import { UserRepository } from './../repositories/user.repository';
import User from '../models/user.model';

@JsonController()
export default class UserController {

    // The User repository
    private readonly repository: UserRepository;

    // Constructor needed to initialize the repository
    constructor() {
        this.repository = getCustomRepository(UserRepository);
    }

    /**
     * Creates a new user and saves it to the db.
     * @param body The values needed to create the entity
     */
    @Post('/users/')
    @HttpCode(201)
    async create(@Body() body: User) {
        // Retrieve sent properties and password
        const { password, ...rest } = body;
        // Create a new user and set the password
        const user = this.repository.create(rest);
        await user.setPassword(password);
        // Save the user and return created user
        return await this.repository.save(user);
    }

}