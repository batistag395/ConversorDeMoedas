import { Injectable } from "@nestjs/common";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class FindAllCoinsService {
    constructor(private readonly coinRepository: CoinRepository){}
    async findAll(){
        return await this.coinRepository.findAll();
    }
}