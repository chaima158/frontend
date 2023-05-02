import React from "react";

import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
import "../../../styles/Homepage.css";
import "./apply.css";
import Layout from "../../../components/Layout/Layout";
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
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
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Layout/>
   
    <h1 className='h2 mb-30 mt-20 ml-20'>Devenir RH</h1>
    <div className="signupcontainerprofile">

      <div className="signupform-containerprofile ">

   
      <div className=" left">
    
      
      <Form  className="register-form" onFinish={handleFinish} >
       
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="votre Nom" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="Votre Prénom" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="Votre N° de téléphone " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
          <Form.Item
              label=" "
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="email" placeholder="Votre adresse E-mail" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="" name="website" >
              <Input  className="inputprofile" type="text" placeholder="Votre adresse " />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="Code Postal" />
            </Form.Item>
          </Col>
        </Row>
     
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="Votre post actuel" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="Votre N° de contrat" />
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
              <TimePicker.RangePicker   className="inputprofile"  format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="green_btn"  type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
      </div>
   </div>
   </div>
   </div>
   </div>
  );
};

export default ApplyDoctor;
