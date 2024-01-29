import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseQuery: BASE_URL }),
  endpoints: (builder) => ({
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