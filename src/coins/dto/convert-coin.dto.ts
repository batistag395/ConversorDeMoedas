import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ConvertCoinDto {

    @IsNumber()
    @IsNotEmpty()
    valueToBuyCoin: number;
    
    @IsString()
    @IsNotEmpty()
    coin1: string;

    @IsString()
    @IsNotEmpty()
    coin2: string;
}