import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { Table } from "antd";
import '../../styles/Homepage.css';
const Users = () => {
  const [users, setUsers] = useState([]);

  //getUsers
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // antD table col
  const columns = [
    {
      title: "Nom",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gestionnaire RH",
      dataIndex: "isDoctor",
      render: (text, record) =>(
        <div  >
      <span   >{record.isDoctor ? "Oui" : "Non"}</span></div>),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="statusthshipped">Supprimer</button>
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
        
      <h1 className="h2 mb-10">Liste des utilisateus</h1>
      </section>
        <section class="table__bodyrh">
        <table>

            <thead> 
            <span class="icon-arrow"></span>
           
      <Table columns={columns} dataSource={users} />
      </thead></table>
      </section>
    </main> 
    
    </div>
    </div>
  );
};

export default Users;
