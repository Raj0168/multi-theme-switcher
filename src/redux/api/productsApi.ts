import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// creates a new api instance for handling api calls
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    // query to get all products from the api
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
