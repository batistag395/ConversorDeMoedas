import { Coin } from "@prisma/client";

export class CoinEntity implements Coin {
    id: number;
    name: string;
    rate: number;
}
