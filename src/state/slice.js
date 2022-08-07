import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   users: [
      {
         user: "randytandy",
         points: 500,
         updated: 1659835964821,
      },
      {
         user: "nycpig",
         points: 327,
         updated: 1659835964821,
      },
      {
         user: "thunderbong",
         points: 100,
         updated: 1659835964821,
      },
   ],
}

export const userSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      ADD(state, action) {
         this.state.push(action.data)
      },

      REMOVE(state, action) {
         return this.state.users.filter(user => user !== action.data)
      },

      UPDATE(state, action) {
         // update points + date
      },
   }
})

export const { ADD, REMOVE, UPDATE } = userSlice.actions;
export default userSlice.reducer;