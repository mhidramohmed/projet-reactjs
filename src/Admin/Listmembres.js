import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import http from '../Http/http'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Listmembres() {
  const [users, setUsers] = useState([]);


  // useEffect(() => {
  //   axios.get('https://shoppingkech.com/api/clubs')
  //     .then(json => { setUsers(json); console.log(json.users) })
  //   console.log(users);
  // }, [])


  // const fetchAllUsers = () => {
  //   http.get('/clubs').then(res => {
  //     setUsers(res.data)
  //   });
  //   console.log(users);
  // }
  // useEffect(() => {
  //   axios.get('https://shoppingkech.com/api/clubs')
  //   .then(res => {setUsers(res.data)});
  //   console.log('data',users);
  // }, [])



  const fetchUserData = () => {
    fetch("https://shoppingkech.com/api/clubs")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
    console.log('data', users);
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <div>
      {users.map((user) => {
        <tr key={user.id}>
          <td > {user.admin_name}</td>
          <td>{user.logo}</td>
          <td>{user.email}</td>
          <td>
            <input type='button' value='reject' />
          </td>
        </tr>
      })}
    </div>



  );

}


// const clubs = () => {
//   const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("https://shoppingkech.com/api/clubs")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.admin_name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


export default Listmembres