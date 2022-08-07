import { useSelector, useDispatch } from 'react-redux'
import UserView from '../UserView/UserView'

function UsersView() {
   const userList = useSelector((state) => state.users.users);
   
   return (
      <section id="UsersView">
         <form>
            <input />
            <button>+</button>
         </form>
         <h3>Users:</h3>
         <ul>
         {userList.map((user, index) => {
        return <UserView key={index} user={user.user} points={user.points} updated={user.updated} />
      })}
         </ul>
      </section>
   )
}

export default UsersView