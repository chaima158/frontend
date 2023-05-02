import React from "react";

import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/login.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import myImage from "../../../assets/cc.gif"

import Header from "../../../components/Home/Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  Aos.init({
    
  });
  return (
    <>
    <Header/>
    <div className="login_container">
      
    <div className="login_form_container">
   
      <div className="leftlogin">
    
      <div className="text-center"><h2 class="h2 mb-10 ">Bienvenue</h2></div>
      
      <Form onFinish={onfinishHandler} className="login-formlogin" >
       

        <Form.Item  name="email">
          <Input type="email" 
          placeholder="Email"
          required
          className="inputlogin" />
        </Form.Item>
        <Form.Item  name="password">
          <Input type="password"
          placeholder="Password"
           required
          className="inputlogin" />
        </Form.Item>
       
        <button className="green_btnlogin" type="submit">
        Connexion
        </button>
      </Form>
      </div>
      <div className="rightlogin">
      <img src={myImage} alt="My Image" style={{ width: "90%", display: "block", margin: "0 auto" }} /> {/* add the image here */}
      <Link to="/register" >
      <button type="button" className="green_btnlogin">
						Registrer
						</button>
        </Link>
    
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;
