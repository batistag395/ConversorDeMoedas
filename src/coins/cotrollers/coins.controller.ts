import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvertCoinDto } from '../dto/convert-coin.dto';
import { CreateCoinDto } from '../dto/create-coin.dto';
import { UpdateCoinDto } from '../dto/update-coin.dto';
import { CalculateConvertion } from '../services/calculate-convertion.service';
import { CreateCoinsService } from '../services/create-coins.service';
import { FindAllCoinsService } from '../services/findAll-coins.service';
import { FindByIdCoinsService } from '../services/findById-coins.service';
import { RemoveCoinsService } from '../services/remove-coins.service';
import { UpdateCoinService } from '../services/update-coins.service';

@Controller('coin')
export class CoinsController {
  constructor(
      private readonly createCoinsService: CreateCoinsService,
      private readonly updateCoinService: UpdateCoinService,
      private readonly fiindAllCoinsService: FindAllCoinsService,
      private readonly findOneCoinService: FindByIdCoinsService,
      private readonly removeCoinService: RemoveCoinsService,
      private readonly convertCoinService: CalculateConvertion,
    ) {}

  @Post()
  create(@Body() createCoinDto: CreateCoinDto) {
    return this.createCoinsService.create(createCoinDto);
  }

  @Get()
  findAll() {
    return this.fiindAllCoinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneCoinService.findOne(+id);
  }
  @Post('/convert')
  convertCoin(@Body() convertCoinDto :ConvertCoinDto){
    return this.convertCoinService.calculateConvertion(convertCoinDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoinDto: UpdateCoinDto) {
    return this.updateCoinService.update(+id, updateCoinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.removeCoinService.remove(+id);
  }
}
