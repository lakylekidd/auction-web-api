import { getCustomRepository } from 'typeorm';
import {
    JsonController, Get, Param, Put, Body,
    HttpCode, Post, NotFoundError, Authorized
} from 'routing-controllers';
import { AdvertisementRepository } from './../repositories/advertisement.repository';
import Advertisement from '../models/advertisement.model';

@JsonController()
export default class AdvertisementController {

    // The Advertisement repository
    private readonly repository: AdvertisementRepository;

    // Constructor needed to initialize the repository
    constructor() {
        this.repository = getCustomRepository(AdvertisementRepository);
    }


    /**
     * Returns a single advertisement based on id
     * @param id The id of the page to find
     */
    @Get('/advertisement/:id')
    async getById(@Param('id') id: number) {
        throw new Error("Method not implemented!");
    }

    /**
     * Returns a list of available advertisements
     */
    @Get('/advertisement')
    async allPages() {
        throw new Error("Method not implemented!");
    }

    /**
     * Updates an advertisements based on provided id
     * @param id The id the entity to update
     * @param body The values needed to update the entity
     */
    @Put('/pages/:id')
    async updatePage(@Param('id') id: number, @Body() body: Partial<Advertisement>) {
        throw new Error("Method not implemented!");
    }

    /**
     * Creates a new advertisements and saves it to the db.
     * @param body The values needed to create the entity
     */
    @Post('/pages')
    @HttpCode(201)
    async createPage(@Body() body: Advertisement) {
        throw new Error("Method not implemented!");
    }
}