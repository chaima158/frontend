import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/navbar.component';

import Layoutconge from '../layoutconge';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./exercice.css"
import { Button } from 'antd';
import Layout from '../../Layout/Layout';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username} </td>
    <td>{props.exercise.description}</td>
  
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
     <button className="statusthdelivered "   to={"/editconge/"+props.exercise._id}>
      edit</button> 
       <button  className="statusthshipped "  onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      
      <div className="Appdash">
      <div className="AppGlassdash ">
       <Layout/>
      
      
    <main class="tablerh">
        <section class="table__headerrh">
        <h1 className='h2 mb-10' align-items ='center'>Liste des congés</h1>
         
          
          <button  className='conge '>
          <Link to="/createconge" >Ajouter un nouveau congé</Link> 
          </button>
          <button className= 'demande '>
          <Link to="/doctor-appointments" > Les demandes</Link>
          </button>
            </section>
        <section class="table__bodyrh">
            <table>
            <thead>   

           <tr>
          
              <th>Type<span class="icon-arrow"></span></th>
              <th>Employé / Decision<span  class="status.delivered"></span></th>
             
              <th>Duréé (jour)<span class="icon-arrow"></span></th>
              <th>Date<span class="icon-arrow"></span></th>
              <th>Actions<span class="icon-arrow"></span></th></tr>
            
       </thead>
       <tbody> 
               
            { this.exerciseList() }</tbody>
         </table> 
        </section>
    </main> 
  </div></div>
    
    )
  }
}