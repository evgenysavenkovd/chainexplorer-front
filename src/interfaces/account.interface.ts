import { ITransaction } from '.';

export interface IAccount {
  balance: number;
  transactions: ITransaction[];
}
