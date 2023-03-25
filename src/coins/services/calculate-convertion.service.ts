import { Injectable } from "@nestjs/common";
import { Coin } from "@prisma/client";
import { ConvertCoinDto } from "../dto/convert-coin.dto";
import { CreateCoinDto } from "../dto/create-coin.dto";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class CalculateConvertion {
    constructor(private readonly coinRepository: CoinRepository){}
4
    async calculateConvertion(convertCoinDto: ConvertCoinDto){

        let coin1 = await this.coinRepository.firstCoin(convertCoinDto.coin1);

        let coin2 = await this.coinRepository.secondCoin(convertCoinDto.coin2);
        
        //return coin1; 
        return `${convertCoinDto.valueToBuyCoin*(coin1 / coin2)}` 
    }
}