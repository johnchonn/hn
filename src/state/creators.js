import { ADD } from "./constants"

function addUser(username) {
   return {
      type: ADD,
      data: username,
   }
}