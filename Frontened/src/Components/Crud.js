import React, { useState } from 'react';
import Get from './Get';
import './Crud.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Crud = () => {
  const[custid,setcustid]=useState('');
  const [customername, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [mobilenumber, setMobnum] = useState('');
  const [email, setEmail] = useState('');
  const [id,setId]=useState('');
  const history=useNavigate();
  const handleLogin=()=>{
  history("/contact");
  }
  const handleDelete = () => {
    const idToDelete = parseInt(id);
    if (!idToDelete) {
      alert('Please enter a valid ID to delete.');
      return;
    }
     axios.delete(`http://127.0.0.1:8088/deleteCustomers/${idToDelete}`)
      .then((response) => {
        console.log('Successfully deleted:', response.data);
        
      })
      .catch((error) => {
        console.error('Error deleting:', error);
});
}
const handlePut = (e) =>
  {
     e.preventDefault();
    axios.put('http://127.0.0.1:8088/updateCustomer',
    {
      custid:custid,
      custname:customername,
      address:address,
      city:city,
      state:state,
      country:country,
      mobnum:mobilenumber,
      email:email
    
  }
    )
  }

    const handlePost = (e) =>{
      e.preventDefault();
      axios.post('http://127.0.0.1:8088/postCustomer',
      {
      custname:customername,
      address:address,
      city:city,
      state:state,
      country:country,
      mobnum:mobilenumber,
      email:email
    }
      )
  };
        return (
    <div id='signup'>
    <h2>PLAY YOUR CRUD OPERATIONS HERE!</h2>
      <h6>NAME</h6>
      <input
        type="text"
        placeholder="Name"
        value={customername}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      
      <h6>ADDRESS</h6>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    
      <h6>CITY</h6>
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <h6>STATE</h6>
      <input
        type="text"
        placeholder="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      
      <h6>COUNTRY</h6>
      <input
        type="text"
        placeholder="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      
      <h6>MOBILE NUMBER</h6>
      <input
      type="long"
      placeholder="Mobile Number"
      value={mobilenumber}
      onChange={(e) => setMobnum(e.target.value)}
    />
    
    <h6>EMAIL</h6>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <button onClick={handlePost}>Post</button>
     <br></br>
     <br></br>
     <br></br>
      <Get/>
      <br></br>
      <br></br>
      <div className='form-group'>
      <label><b>CUSTOMER ID: </b></label>
      <input id="id"
      type='number'
      placeholder='Enter the id to update'
      value={custid}
      onChange={(e) => setcustid
      (e.target.value)}></input>
      </div>
<br></br>
      <div class='form-group'>
      <label><b>DELETE ID :   </b></label>
      <input id="id"
      type='number'
      placeholder='Enter the Id to be deleted'
      value={id}
      onChange={(e) => setId(e.target.value)}></input>
      </div>  
      <button onClick={handleDelete}>DELETE</button>
      <br></br> <br></br> <br></br>
      <button onClick={handlePut}>PUT</button>
      <br></br> <br></br> <br></br>
      <button onClick={handleLogin}>CONTACTUS!</button>
      </div>
      
  );
};
export default Crud;