import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Get() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8088/getCustomer');
    console.log(result.data);
    setUsers(result.data);
  }

  
  
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>CITY</th>
            <th>STATE</th>
            <th>COUNTRY</th>
            <th>MOBILE Number</th>
            <th>EMAIL</th>
             
          </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.cust_id}>
              <td>{user.custname}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.country}</td>
              <td>{user.mobnum}</td>
              <td>{user.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
  );
}

export default Get;

