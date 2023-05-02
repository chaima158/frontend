import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import moment from "moment";
import "../../../styles/Homepage.css";
import "../Profile/profile.css"

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // update doc ==========
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/home");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  // update doc ==========

  //getDOc Details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);
  return (
      
    <div className="Appdash">
    <div className="AppGlassdash ">
    
    <Layout/>
    
    <div className="signup-containerprofile">
      <div className="signup-form-containerprofile ">
      <div className="left">
      
      {doctor && (
        <Form
        className="register-form"
          onFinish={handleFinish}
          
          initialValues={{
            ...doctor,
            timings: [
              moment(doctor.timings[0], "HH:mm"),
              moment(doctor.timings[1], "HH:mm"),
            ],
          }}
        >
         
        
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="firstName"
                required
               
                rules={[{ required: true }]}
              >
                <Input   className="inputprofile" type="text" placeholder="Entrer votre nom" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="lastName"
                required
                rules={[{ required: true }]}
              >
                <Input  className="inputprofile" type="text" placeholder="Entrer votre prenom" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input className="inputprofile" type="text" placeholder="Entrer votre num de télephone" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input className="inputprofile" type="email" placeholder="Entrer votre mail" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item label=" " name="website">
                <Input  className="inputprofile" type="text" placeholder="Entrer votre site " />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="address"
                required
                rules={[{ required: true }]}
              >
                <Input  className="inputprofile" type="text" placeholder="Entrer votre addresse" />
              </Form.Item>
            </Col>
          </Row>
          <div/>
          
        
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="specialization"
                required
                rules={[{ required: true }]}
              >
                <Input className="inputprofile" type="text" placeholder="Entrer votre poste" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="experience"
                required
                rules={[{ required: true }]}
              >
                <Input className="inputprofile" type="text" placeholder="Entrer votre experience" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label=" "
                name="feesPerCunsaltation"
                required
                rules={[{ required: true }]}
              >
                <Input  className="inputprofile" type="text" placeholder="your contact no" />
              </Form.Item>
            </Col>
            
            <Col xs={24} md={24} lg={8}>
              <Form.Item label=" " name="timings"  required>
                <TimePicker.RangePicker format="HH:mm" className="inputprofile" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
              <button className="green_btn"  type="submit">
                Update
              </button>
            </Col>
          </Row>
        </Form>
      )}
 </div>
 </div>
 </div>
 </div>
 </div>

  );
};

export default Profile;
