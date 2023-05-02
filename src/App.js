import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Login from "./pages/Employee/Login/Login";
import Register from "./pages/Employee/Register/Register";
import { useSelector } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyRH from "./pages/Employee/ApplyRh/ApplyRh";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/RH";
import Profile from "./pages/doctor/Profile/Profile";
import BookingPage from "./pages/Employee/BookingPage";
import Appointments from "./pages/Employee/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import Calendar from "./pages/Calendar/Calendar";
import Crud from "./pages/crud";


import Hello from "./pages/Hello/Hello";
import AdminDash from "./pages/admin/AdminDash";
import Home from "./pages/Home/Home";
import Conge from "./pages/conge";
import Todo from "./pages/todo/todo";
import Expenses from "./pages/doctor/Comtabilite/Expenses";


import Hyy from "./components/Todokahla/hyy";
import Avoirconge from "./pages/Employee/AvoirConge/Avoirconge";
import Invoice from "./downold/components/App/App"
import Certif from "./pages/certif/certif";







import Navbar from "./components/Congee/Navbar/navbar.component"
import ExercisesList from "./components/Congee/list/exercises-list.component";
import EditExercise from "./components/Congee/edit-exercise.component";
import CreateExercise from "./components/Congee/create/create-exercise.component";
import CreateUser from "./components/Congee/create-user.component";
import CongeEmploye from "./pages/Employee/CongeEmploye"
import Voice from "./pages/doctor/rapport/voice";






import Rapportecrit  from "./pages/rapportecrit"

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
  






<>
          <Routes>
             <Route path="/" element={ <Home/>}/>
            <Route path="/apply-doctor" element={<ProtectedRoute> <ApplyRH /></ProtectedRoute>} />
            <Route  path="/admin/dashboard" element={<ProtectedRoute><AdminDash /></ProtectedRoute>  }/>
            <Route  path="/admin/users" element={  <ProtectedRoute><Users /></ProtectedRoute> } />
            <Route  path="/admin/doctors"  element={ <ProtectedRoute><Doctors /></ProtectedRoute>  } />
            
           
            <Route  path="/doctor/profile/:id"  element={ <ProtectedRoute><Profile /></ProtectedRoute> }/>
            <Route  path="/doctor/book-appointment/:doctorId" element={ <ProtectedRoute><BookingPage /></ProtectedRoute> }/>
            <Route  path="/notification"   element={<ProtectedRoute><NotificationPage /></ProtectedRoute> }   /> 
            <Route  path="/todo"element={<ProtectedRoute><Todo/></ProtectedRoute> }   />  
            <Route  path="/calendar"element={<ProtectedRoute><Calendar/></ProtectedRoute> }   /> 
            <Route  path="/login" element={ <PublicRoute><Login /></PublicRoute>  }   />
            <Route  path="/expenses" element={ < Expenses/> }   />
          
            <Route  path="/booking" element={ <BookingPage/>  }     />
            <Route  path="/invoice" element={ <ProtectedRoute><Invoice/></ProtectedRoute>  }   />
          
           
            <Route  path="/certif"element={<ProtectedRoute><Certif/></ProtectedRoute> }   />  
            <Route  path="/register"   element={ <PublicRoute><Register /></PublicRoute>    } />  
            <Route  path="/appointments"  element={ <ProtectedRoute> <Appointments /></ProtectedRoute> }  />  
            <Route  path="/doctor-appointments"  element={ <ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
            <Route  path="/home" element={  <ProtectedRoute><Hello /></ProtectedRoute>  }     />
            <Route  path="/avoirconge" element={<ProtectedRoute><Avoirconge/></ProtectedRoute>} />
           
            <Route path="/conge" element= {<ExercisesList/>} />
            <Route path="/editconge/:id" element={<EditExercise/>} />
            <Route path="/createconge" element={<CreateExercise/>} />
           <Route path="/userconge"element={<CreateUser/>} />
 
           <Route path="/listeconge" element= {<CongeEmploye/>} />
           <Route path="/rapport" element= {<Voice/>} />
           <Route path="rapportecrit" element={<Rapportecrit/>}/>
           <Route path="rapport/rapportecrit" element={<Rapportecrit/>}/>
    
          </Routes>
        
          <>
  
 
 
          <>
     
      </>
 
 </>
        
        
            </>
     




   
   
   

  


  );
}

export default App;
