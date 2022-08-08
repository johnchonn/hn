import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { ApiData } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    [ApiData.reducerPath]: ApiData.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiData.middleware),
})

setupListeners(store.dispatch)