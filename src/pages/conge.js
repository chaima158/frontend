import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { Row } from "antd";
import DoctorList from "../components/RHList";
import "../styles/Homepage.css"
const Hello = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
    </div>
    </div>
  );
};

export default Hello;
