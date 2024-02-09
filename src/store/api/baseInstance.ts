import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, unknown, unknown> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await client({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
