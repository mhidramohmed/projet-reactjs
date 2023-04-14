import React, { useEffect, useState } from "react"

const Ap = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://shoppingkech.com/api/clubs")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.admin_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Ap;
