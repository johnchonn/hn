import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useGetUserQuery } from '../../api/apiSlice'
import { addUser } from "../../state/slice"
import UserView from '../UserView/UserView'

function UsersView() {
   const users = useSelector(state => state.userSlice.users)
   const [text, setText] = useState("")
   const dispatch = useDispatch()

   const Δtext = (e) => setText(e.target.value)
   const submit = (e) => dispatch(addUser(text))

   console.log("Users:", users)

   return (
      <section id="UsersView">
         <div>
            <input placeholder="add user..." value={text} onChange={Δtext}/>
            <button onClick={submit}>+</button>
         </div>
         <h3>Users:</h3>
         <ul>
            {
               users.map((user, i) => <UserView key={i} user={user} />)
            }
         </ul>
      </section>
   )
}

export default UsersView