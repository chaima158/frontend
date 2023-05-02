import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/navbar.component';
import { Link } from 'react-router-dom';
import "./create-user.css"
const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    setUsername('');
  };

  return (
   <>
   <div className='button'>
   
          <button className= 'demande '>
          <Link to="/conge" > Liste des congés</Link>
          </button>
          </div>
         
     <div className='mt-20 ml-60'>
       
      <form onSubmit={onSubmit}   >
        
          <label>congé: </label>
          <input type="text"
              required
              className="inputdow " 
              value={username}
              onChange={onChangeUsername}
              />
      
        
          <input type="submit" value="Ajouter ce type" className="statusthpendingajout" />
        
      </form>
      </div>
      </>
  );
};

export default CreateUser;
