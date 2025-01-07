import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [users, setUsers] = useState(false);
  const [getData, setGetData] = useState({});

  let getFun = () => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        setGetData(response.data.data);  // Use setGetData directly to update the state
        setUsers(true);
        console.log(getData);
      })
      .catch(error => {
        console.log(error);
      });
  };




    return (
<>
        <button type="button" onClick={getFun}>Get users</button>
      
            <table> 
            <thead>
            <tr> 
            <th>First Name</th>
             <th>Last Name</th> 
             <th>Email</th>
             <th>Avatar</th>
              </tr>
              </thead>
              <tbody>
          {users ? 
            getData.map((user, index) => (
              <tr key={index}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><img src={user.avatar} alt="Avatar" /></td>
              </tr>
            ))
          : 
            <tr><td colSpan="4">Loading...</td></tr>
          }
          </tbody>
              
              </table>
        </>
    )
}

export default Table