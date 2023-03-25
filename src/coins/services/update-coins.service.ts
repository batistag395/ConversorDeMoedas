import { Injectable } from "@nestjs/common";
import { UpdateCoinDto } from "../dto/update-coin.dto";
import { CoinRepository } from "../repositories/coins.repository";

@Injectable()
export class UpdateCoinService {
    constructor(private readonly coinRepository: CoinRepository){}
    async update(id: number, updateCoinDto: UpdateCoinDto){
        return await this.coinRepository.update(id, UpdateCoinDto);
    }
}