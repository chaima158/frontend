import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";

import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { message, Table } from "antd";
import "../../styles/Homepage.css"
import Navbar from "../../components/Congee/Navbar/navbar.component";
import { Link } from "react-router-dom";


const DoctorAppointments = () => {

  const [appointments, setAppointments] = useState([]);
  const { user } = useSelector((state) => state.user);
  const userName = user?.name;
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/doctor//doctor-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const handleStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/update-status",
        { appointmentsId: record._id, status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        getAppointments();
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      
    },
 
   
    {
      title: "Nom d'utilisateur"  ,
      dataIndex: "userName",
      render: (userName, record) => (
        <span>{record.userName ? record.userName: record.userName}</span>
      ),
    },

   
    {
      title: "Date debut ",
      dataIndex: "date" ,
      render: (text, record) => (
      
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
        
        </span>
      ),
    },
   
    {
      title: "Date fin",
      dataIndex: "time" ,
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
       
        </span>
      ),
     
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <button
                 className="statusthdelivered "
                onClick={() => handleStatus(record, "approved")}
              >
                Approuver
              </button>
              <button
               className="statusthshipped "
                onClick={() => handleStatus(record, "reject")}
              >
                Refuser
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Layout/>  
   
    <main class="tablerh">
        <section class="table__headerrh">
        
        
       
<div class="center">

 
 <h1 class="h2 mb-10">Liste des demandes des congés</h1>
</div>
<button  className='conge '>
          <Link to="/createconge" >Ajouter un nouveau congé</Link> 
          </button>
          <button className= 'demande '>
          <Link to="/conge" > Liste des congés</Link>
          </button>
        </section>
        <section class="table__bodyrh">
        <table>

            <thead> 
            <span class="icon-arrow"></span>
          
      <Table 
      columns={columns} 
      dataSource={appointments} /> 
      </thead></table>
      </section>
    </main> 
   </div></div>
  );
};

export default DoctorAppointments;
