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
    @Get('/advertisements/:id')
    async getById(@Param('id') id: number) {
        return this.repository.findOne(id)
        // throw new Error("Method not implemented!");
    }

    /**
     * Returns a list of available advertisements
     */
    @Get('/advertisements')
    async allPages() {
        return this.repository.find().then(advertisement => advertisement)
        // throw new Error("Method not implemented!");
    }

    /**
     * Updates an advertisements based on provided id
     * @param id The id the entity to update
     * @param body The values needed to update the entity
     */
    @Put('/advertisements/:id')
    async updatePage(@Param('id') id: number, @Body() body: Partial<Advertisement>) {
        const add = await this.repository.findOne(id)
        if (!add) throw new NotFoundError('No Add Found!')

        return this.repository.merge(add, body).save()
        // throw new Error("Method not implemented!");
    }

    /**
     * Creates a new advertisements and saves it to the db.
     * @param body The values needed to create the entity
     */
    @Post('/advertisements')
    @HttpCode(201)
    async createPage(@Body() body: Advertisement) {
        return body.save()
        // throw new Error("Method not implemented!");
    }
}