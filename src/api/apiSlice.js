import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const HN_API =  "https://hacker-news.firebaseio.com/v0"

export const ApiData = createApi({
  reducerPath: 'HackerNews',
  baseQuery: fetchBaseQuery({ baseUrl: HN_API, }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: user => `/user/${user}.json`
    }),
  })
})

export const { useGetUserQuery } = ApiData