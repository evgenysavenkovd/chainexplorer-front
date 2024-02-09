import { ITransaction, ITransactionReceipt } from '@app/interfaces';
import { mainApi } from './main.api';

export const transactionsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getTransaction: build.query<
      ITransaction & { receipt: ITransactionReceipt },
      string
    >({
      query: (hash) => ({
        url: `/txs/${hash}`,
      }),
      providesTags: (_res, _err, id) => [{ type: 'transactions', id }],
    }),
  }),
});

export const { useGetTransactionQuery } = transactionsApi;
