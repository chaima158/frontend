import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './Navbar/navbar.component';


const EditExercise = ({ match }) => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/'+match.params.id)
      .then(response => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
        }
      })
      .catch(error => {
        console.log(error);
      });

  }, [match.params.id]);

  const onChangeUsername = e => {
    setUsername(e.target.value);
  }

  const onChangeDescription = e => {
    setDescription(e.target.value);
  }

  const onChangeDuration = e => {
    setDuration(e.target.value);
  }

  const onChangeDate = date => {
    setDate(date);
  }

  const onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/conge';
  }

  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Navbar/>
    <div className="containerConge">
    
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-groupConge"> 
          <label>Username: </label>
          <select
            required
            className="form-controlConge"
            value={username}
            onChange={onChangeUsername}>
            {users.map(function(user) {
              return <option 
                key={user}
                value={user}>
                {user}
              </option>;
            })}
          </select>
        </div>
        <div className="form-groupConge"> 
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-controlConge"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-groupConge">
          <label>Duration (in minutes): </label>
          <input 
            type="text" 
            className="form-controlConge"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-groupConge">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-groupConge">
          <input type="submit" value="Edit Exercise Log" className="btnconge btn-primaryConge" />
        </div>
      </form>
    </div></div></div>
  )
}

export default EditExercise;
