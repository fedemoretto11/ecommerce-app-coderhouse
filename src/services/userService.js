import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseQuery: BASE_URL }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (localId) => `users/${localId}.json`
    }),
    postUserData: builder.mutation({
      query: (localId, ...data) => ({
        url: `users/${localId}.json`,
        method: 'PUT',
        body: data
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
    })
  })
})