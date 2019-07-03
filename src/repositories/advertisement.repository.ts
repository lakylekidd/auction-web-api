import { EntityRepository, Repository } from "typeorm";
import Advertisement from "../models/advertisement.model";

@EntityRepository(Advertisement)
export class AdvertisementRepository extends Repository<Advertisement> {

}