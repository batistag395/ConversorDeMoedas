import { Injectable } from "@nestjs/common";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class FindByIdCoinsService {
    constructor(private readonly coinRepository: CoinRepository){}
    async findOne(id:number){
        return await this.coinRepository.findOne(id);
    }
}