import { Injectable } from "@nestjs/common";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class RemoveCoinsService {
    constructor(private readonly coinRepository: CoinRepository){}
    async remove(id:number){
        return await this.coinRepository.remove(id);
    }
}