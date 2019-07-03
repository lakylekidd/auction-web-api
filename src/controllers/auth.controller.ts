import { getCustomRepository } from 'typeorm';
import {
    JsonController, Get, Param, Put, Body,
    HttpCode, Post, NotFoundError, Authorized, BadRequestError
} from 'routing-controllers';
import { UserRepository } from './../repositories/user.repository';
import { AuthenticatePayload } from './../helpers/authenticate-payload';
import { sign } from '../helpers/jwt';

@JsonController()
export default class AuthenticationController {

    // The User repository
    private readonly repository: UserRepository;

    // Constructor needed to initialize the repository
    constructor() {
        this.repository = getCustomRepository(UserRepository);
    }

    /**
     * Returns a token provided the email and password are correct
     */
    @Get('/auth/token')
    async token(@Body() { email, password }: AuthenticatePayload) {
        // Check if user exists
        const user = await this.repository.findOne({
            where: { email: email }
        });
        if (!user) throw new BadRequestError();

        // Check if password is correct
        const passwordCorrect = user.checkPassword(password);
        if (!passwordCorrect) throw new BadRequestError();

        // Generate JWT Token
        const jwt = sign({ id: user.id! });

        // Return the generated token
        return { jwt }
    }
}