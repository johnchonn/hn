import { useSelector, useDispatch } from 'react-redux'
import UserView from '../UserView/UserView'

function UsersView() {
   const users = useSelector(state => state.users)

   return (
      <section id="UsersView">
         <form>
            <input />
            <button>+</button>
         </form>
         <h3>Users:</h3>
         <ul>
            {
               users.map((user, i) => <UserView key={i} {...user} />)
            }
         </ul>
      </section>
   )
}

export default UsersView