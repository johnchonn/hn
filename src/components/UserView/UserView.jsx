import { useGetUserQuery } from '../../api/apiSlice'
import { useDispatch } from 'react-redux'
import { removeUser } from "../../state/slice"

function UserView({ user }) {
  const responseFromQuery = useGetUserQuery(user);
  const { data, isLoading, isSuccess, isError } = responseFromQuery
  const dispatch = useDispatch()
  const handleClick = (e) => dispatch(removeUser(user))

  return isLoading
    ? <li>{user} — (fetching) <button onClick={handleClick}>-</button></li>
    : isSuccess
      ? <li>{user} — {data.karma}<button onClick={handleClick}>-</button></li>
      : <li>Error fetching {user}<button onClick={handleClick}>-</button></li>
}

export default UserView;