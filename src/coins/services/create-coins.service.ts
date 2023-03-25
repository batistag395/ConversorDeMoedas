import { Injectable } from '@nestjs/common';
import { CreateCoinDto } from '../dto/create-coin.dto';
import { UpdateCoinDto } from '../dto/update-coin.dto';
import { CoinRepository } from '../repositories/coins.repository';

@Injectable()
export class CreateCoinsService {
  constructor(private readonly coinRepository: CoinRepository){}
  async create(createCoinDto: CreateCoinDto) {
    return await this.coinRepository.create(createCoinDto);
  }
}