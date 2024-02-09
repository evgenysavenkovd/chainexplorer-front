import { IAccount } from '@app/interfaces';
import { mainApi } from './main.api';

export const accountsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAddress: build.query<IAccount, string>({
      query: (address) => ({
        url: `/accounts/${address}`,
      }),
    }),
  }),
});

export const { useGetAddressQuery } = accountsApi;
