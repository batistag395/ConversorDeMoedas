import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCoinDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    rate: number;
}
