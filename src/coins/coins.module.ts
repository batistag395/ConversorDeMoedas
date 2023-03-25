import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CoinsController } from './cotrollers/coins.controller';
import { CoinRepository } from './repositories/coins.repository';
import { CalculateConvertion } from './services/calculate-convertion.service';
import { CreateCoinsService } from './services/create-coins.service';
import { FindAllCoinsService } from './services/findAll-coins.service';
import { FindByIdCoinsService } from './services/findById-coins.service';
import { RemoveCoinsService } from './services/remove-coins.service';
import { UpdateCoinService } from './services/update-coins.service';

@Module({
  controllers: [CoinsController],
  providers: [
    CreateCoinsService, 
    PrismaService, 
    CoinRepository, 
    CalculateConvertion,
    FindAllCoinsService,
    FindByIdCoinsService,
    RemoveCoinsService,
    UpdateCoinService,
    
  ]
})
export class CoinsModule {}
