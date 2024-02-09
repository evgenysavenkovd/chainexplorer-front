import { ITransactionLog } from './transaction-log.interface';

export interface ITransactionReceipt {
  type: number;
  from: string;
  to: string;
  status: number;
  cumulativeGasUsed: number;
  logsBloom: string;
  logs: ITransactionLog[];
  transactionHash: string;
  gasUsed: number;
  blockHash: string;
  blockNumber: number;
  transactionIndex: number;
  effectiveGasPrice: number;
}
