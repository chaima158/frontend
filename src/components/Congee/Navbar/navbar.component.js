import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "../../Layout/layout.css";


import { UilSignOutAlt ,UilBars} from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <>
    <div className="bars" >
      <UilBars />
    </div>
    <motion.div className='sidebar'>
   
      
   

   



          <div className="menuside">
           
                <>
                <div className={`menuItem ${  "menuItem active"} `}>
      <div  className= "icon">
      <div className="menu_link">   <Link to="/home" >Home</Link></div>
 </div></div>



 <div className={`menuItem ${  "menuItem active"} `}>
          <div className= "icon">
          <div className="menu_link">  <Link to="/conge" >Liste des congés</Link></div>
          </div></div>
          <div className={`menuItem ${  "menuItem active"} `}>
          <div   className= "icon" >
          <div className="menu_link">  <Link to="/createconge" >Ajouter un nouveau congé</Link></div>
          </div></div>
         
          <div className={`menuItem ${  "menuItem active"} `}>
          <div   className= "icon" >
          <div className="menu_link">   <Link to="/doctor-appointments" >Les demandes</Link></div>
          </div></div>
                </>
            
            <div className={`menuItem `} >
              <i className="fa-solid fa-right-from-bracket"></i>
              <Link to="/home"></Link>
            </div>
          </div>
      

            
          
         
        
     
   
    </motion.div>
  </>
        
  );
};

export default Navbar;
