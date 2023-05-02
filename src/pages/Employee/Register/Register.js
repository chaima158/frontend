import React from "react";
import "../Register/register.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import myImage from "../../../assets/em3.gif";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from "../../../components/Home/Header";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  Aos.init({
    
  });
  return (
  
    <>
    <Header/>
    <div className="signup-container">
      <div className="signup-form-container ">
      <div className="leftregister">
      <img src={myImage} alt="My Image" style={{ width: "90%", display: "block", margin: "0 auto" }} /> {/* add the image here */}
         

          <Link to="/login" >
          <button type="button" className="white_btnregister">
							Sign in
						</button>
           </Link>
          </div>
      
          <div className="rightregister">
        <Form
          onFinish={onfinishHandler}
          className="register-form"
        >
            <div className="text-center"><h2 class="h2 mb-10 ">Bienvenue</h2></div>
          <Form.Item  name="name">
            <Input type="text"
             required 
             placeholder=" Name"
             className="inputregister"
            
            />
          </Form.Item>
          <Form.Item  name="email">
            <Input type="email" 
            required
            placeholder=" Email"
            className="inputregister"/>
          </Form.Item>
          <Form.Item name="password">
            <Input type="password"
             required
             placeholder=" Password"
             className="inputregister"/>
          </Form.Item>

          
          <button className="green_btnregister" type="submit">
            Register
          </button>
        </Form>
        
      </div>
      </div>
		</div>
</>
  );
};

export default Register;
