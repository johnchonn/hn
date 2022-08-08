import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   users: ["norvig", "tptacek", "nycpig"],
}

export const userSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      addUser(state, action) {
         state.users.push(action.payload)
      },

      removeUser(state, action) {
         return {
            users: state.users.filter(user => user !== action.payload)
         }
      },
   }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;