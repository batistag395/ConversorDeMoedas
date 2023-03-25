import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinsModule } from './coins/coins.module';
import { CoinRepository } from './coins/repositories/coins.repository';
import { CalculateConvertion } from './coins/services/calculate-convertion.service';
import { CreateCoinsService } from './coins/services/create-coins.service';
import { FindAllCoinsService } from './coins/services/findAll-coins.service';
import { FindByIdCoinsService } from './coins/services/findById-coins.service';
import { RemoveCoinsService } from './coins/services/remove-coins.service';
import { UpdateCoinService } from './coins/services/update-coins.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CoinsModule],
  controllers: [AppController],
  providers: [
            AppService, 
            CreateCoinsService, 
            PrismaService, 
            CoinRepository, 
            CalculateConvertion,
            FindAllCoinsService,
            FindByIdCoinsService,
            RemoveCoinsService,
            UpdateCoinService,
          ],
})
export class AppModule {}
