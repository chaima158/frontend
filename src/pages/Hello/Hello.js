import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { Row } from "antd";
import DoctorList from "../../components/RHList";
import "./hello.css"
import videoBg from '../../assets/videoBg.mp4'
// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
// import about data
import { helloData } from '../../Data/data';

const Hello = () => {
   // destructure about
   const { image, title, subtitle } = helloData;
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
  Aos.init({
    duration: 400,
    offset: 0,
  });
  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
   <Layout/>
   <section
      className='ml-[100px] xl:mt-[100px] min-w-max '
      
      data-aos-offset='350'
    >
      <div className='container mx-auto'>
        <div >
          {/* image */}
      
            
          <div className='mainvideo'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="contentvideo">
            <h1>Welcome To my site</h1>
            <p></p>
        </div>
    </div>
         
          {/* text */}
         
        </div>
      </div>
    </section>
   
   
   
     
    
    </div>
    </div>
  );
};

export default Hello;