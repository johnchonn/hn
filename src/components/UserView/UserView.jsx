
function UserView({ user, points, updated }) {
  return (
    <li>
      <div>User: {user}</div>
      <div>Points: {points}</div>
      <div>Updated: {updated}</div>
    </li>
  )
}

export default UserView;