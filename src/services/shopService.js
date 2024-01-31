import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../firebase/db'


export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json'
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
    }),
    getProductById: builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo=${id}`
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: `orders/${order.localId}.json`,
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
      query: (localId) => `orders/${localId}.json`
    }),

  })

})


export const { 
  useGetCategoriesQuery, 
  useGetProductsByCategoryQuery,
  usePostOrderMutation, 
  useGetProfilePictureQuery,
  usePostProfilePictureMutation,
  useGetOrdersQuery,
  useGetProductByIdQuery
} = shopApi