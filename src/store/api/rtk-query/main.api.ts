import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../baseInstance';

export const mainApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ['transactions'],
});
