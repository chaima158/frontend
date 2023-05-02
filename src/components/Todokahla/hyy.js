import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainScreen from './MainFront/MainScreen'
import SideMenu from './MainFront/SideMenu'
import toast, { Toaster } from 'react-hot-toast';

import NavBar from './NavBar'
import ProfileMain from './Profile/ProfileMain'
import SignUp from './SignUp'

import TaskScreen from './TaskFront/TaskScreen'
import SpinnerState from '../../context/Spinner/SpinnerState'
import TaskState from '../../context/Task/TaskState'

import TodoState from '../../context/Todo/TodoState'
import { useCookies } from "react-cookie";
import Login from './Login';
import UserState from '../../context/User/UserState';

const Hyy = () => {


  const location = useLocation();
  const navigate = useNavigate()
  // console.log("htis ",cookies)
  
  
  //  console.log(process.env.REACT_APP_API)

  return (
    <>


      <TodoState>
        <TaskState>
          <SpinnerState>
            <UserState>



            <Toaster
              position="top-right"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },

                // Default options for specific types
                success: {
                  duration: 3000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}
            />

            <NavBar /> 
            <div className='flex'>

             <SideMenu />

              <Routes>



                <Route exact path='/do' element={<MainScreen />}></Route>
                <Route exact path='/:todoId/:todoTitle' element={<TaskScreen />}></Route>
                <Route exact path='/profiledo' element={<ProfileMain />}></Route>
                <Route exact path='/signupdo' element={<SignUp />}></Route>
                <Route exact path='/logindo' element={<Login />}></Route>

              </Routes>

            </div>

            </UserState>
          </SpinnerState>
        </TaskState>
      </TodoState>

    

    </>
  )
}

export default Hyy