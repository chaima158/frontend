import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { message, Table } from "antd";
import '../../styles/Homepage.css';
import "./rh.css"
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  //getUsers
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle account
  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="statusthdelivered "
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Accepter
            </button>
          ) : (
            <button className="statusthshipped ">Refuser</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="Appdash">
    <div className="AppGlassdash ">

  <Layout/>
  
<div>

    <main class="tablerh">
        

        <section class="table__headerrh">
        <div className="text-center"><h1 class="h2 mb-10 ">Liste des Ressources Humaines </h1></div>
       
      </section>
        <section class="table__bodyrh">
        
        <table>

            <thead> 
            <span class="icon-arrow"></span>
    <Table columns={columns} dataSource={doctors} />
    </thead></table>
      </section>
    </main>  
  
  </div>
  </div>
  </div> 
  );
};

export default Doctors;
