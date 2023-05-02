import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../Navbar/navbar.component';
import User from "../create-user.component"
import "./create.css"
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';

const CreateExercise = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }, [])

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  }

  const onChangeDate = (date) => {
    setDate(date);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      description: description,
      duration: duration,
      date: date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/conge';
  }

  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Layout/>
    
   <div className='user'>
    <User/>
   </div>
      
   
   
    
    <>
  
  
      
        
       
        <div className='containerlist'> 
      <div className="bg-white p-10 rounded shadow ">
         
                

        <form onSubmit={onSubmit}   >
      
        <article className="">
            <div className="">
            <label>congé: </label>
            <select
              required
              className="inputdow "
              value={username}
              onChange={onChangeUsername}>
              {
                users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select></div></article>
            
            <article className="containerinvoice">
            <div className="register-formdow ">
            <label>Employé: </label>
            <input  type="text"
              required
              className="inputdow "
              value={description}
              onChange={onChangeDescription}
            /></div></article>
         
          
            
         
            <label>Durée: </label>
            <input 
              type="text" 
              className="inputdow "
             
              value={duration}
              onChange={onChangeDuration}
            />
         
          
            <label>Date: </label>
            <div>
              <DatePicker
                selected={date}
                onChange={onChangeDate}
                className="inputdow "
               
              />
         
          </div>
          
            <input type="submit" value="Créer"    />
         
        </form>
        </div></div></></div></div>
 
  )
}

export default CreateExercise;
