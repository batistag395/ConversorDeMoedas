import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCoinDto } from "../dto/create-coin.dto";
import { UpdateCoinDto } from "../dto/update-coin.dto";
import { CoinEntity } from "../entities/coin.entity";

@Injectable()
export class CoinRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(creatCoinDto: CreateCoinDto): Promise<CoinEntity> {
    return this.prisma.coin.create({
      data: creatCoinDto,
    });
  }

  async findAll(){
    return await this.prisma.coin.findMany();
  }

  async findOne(id: number){
    return this.prisma.coin.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: number, updateCoinDto: UpdateCoinDto): Promise<CoinEntity>{
    return this.prisma.coin.update({
      where:{
        id,
      },
      data: updateCoinDto,
    })
  }
  async remove(id:number): Promise<CoinEntity>{
    return this.prisma.coin.delete({
      where:{
        id,
      },
    })
  }
  async firstCoin(coin: string){
    const moeda: CreateCoinDto = await this.prisma.coin.findFirst({
      where:{name: coin}
    })
    return moeda.rate;
  }
  async secondCoin(coin: string){
    const rate: CreateCoinDto = await this.prisma.coin.findFirst({
      where:{name: coin}
    })
    return rate.rate;

  }
}