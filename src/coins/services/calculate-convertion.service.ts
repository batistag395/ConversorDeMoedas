import { Injectable } from "@nestjs/common";
import { CreateCoinDto } from "../dto/create-coin.dto";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class CalculateConvertion {
    constructor(private readonly coinRepository: CoinRepository){}

    async calculateConvertion(firstCoin: string, yourCoin: string, valueToBuyCoin: number){

        let coin1: CreateCoinDto = await this.coinRepository.firstCoin(firstCoin);

        let coin2: CreateCoinDto = await this.coinRepository.secondCoin(yourCoin);
        
        return `${valueToBuyCoin /(coin1.rate * coin2.rate)}` 
    }
}