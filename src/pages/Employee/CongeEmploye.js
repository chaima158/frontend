import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Congee/Navbar/navbar.component';
import Layout from '../../components/Layout/Layout';


const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
   
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
        <h1 className='h2 mb-10'>Liste des congés</h1>
          
            </section>
        <section class="table__bodyrh">
            <table>
            <thead>   

           <tr>
          
              <th>Type<span class="icon-arrow"></span></th>
              <th>Employé / Decision<span  class="status.delivered"></span></th>
              <th>Duréé<span class="icon-arrow"></span></th>
              <th>Date<span class="icon-arrow"></span></th>
            </tr>
            
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