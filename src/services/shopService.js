import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../firebase/db'

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json'
    }),
    getProducts: builder.query({
      query: () => 'products.json'
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
    }),
    postOrder: builder.mutation({
      query: ({...order}) => ({
        url: 'orders.json',
        method: 'POST',
        body: order
      })
    }),
    getProfilePicture: builder.query({
      query: (localId) => `profilePictures/${localId}.json` 
    }),
    postProfilePicture: builder.mutation({
      query: ({localId, image}) => ({
        url: `profilePictures/${localId}.json`,
        method: 'PUT',
        body: {
          image
        }
      })
    }),
    getOrders: builder.query({
      query: () => 'orders.json'
    }),

  })

})

export const { 
  useGetCategoriesQuery, 
  useGetProductsQuery, 
  useGetProductsByCategoryQuery,
  usePostOrderMutation, 
  useGetProfilePictureQuery,
  usePostProfilePictureMutation,
  useGetOrdersQuery
} = shopApi