import React from "react";

import { adminMenu, userMenu } from "../../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { motion } from "framer-motion";


import { UilSignOutAlt ,UilBars} from "@iconscout/react-unicons";
const Layoutconge = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/");
  };

  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "fa-solid fa-house",
    },
    {
      name: "Comptabilités",
      path: "/expenses",
      icon: "fa-solid fa-list",
    },
   
   
  
   
    
   
    {
      name: "Gestion des congés",
      path: "/conge",
      icon: "fa-solid fa-list",
    },
    {
      name: "Facturation",
      path: "/crud",
      icon: "fa-solid fa-list",
    },
    

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
    {
      name: "Les demandes congés",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    
   
   
  ];
  // =========== doctor menu ===============

  // redering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      <div className="bars" >
        <UilBars />
      </div>
      <motion.div className='sidebar'>
     
        
     

      <div className="logoside" style={{ cursor: "pointer" }}>
                
                <Badge
                  count={user && user.notifcation.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell"></i>
                </Badge>

                <span>  <Link to="/doctor/profile/${user?._id}"><span>{user?.name}</span></Link> </span>
              </div>




            <div className="menuside">
              
               
                  <>
                    <div className={`menu-item ${  "menuItem active"} `}>
                      <div className= "">ExcerTracker  <Link to="/createconge" ></Link></div>
                           
                   
                    </div>
                    <div className={`menu-item ${  "menuItem active"} `}>
                    <div className= "">Exercises</div>
                    <div className="menu_link">   <Link to="/conge" ></Link></div> </div>

                    <div className={`menu-item `} >
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/createconge"></Link>
              </div>
                  </>
                
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login"></Link>
              </div>
            </div>
        

              
            
            <div className="body">{children}</div>
          
       
     
      </motion.div>
    </>
  );
};

export default Layoutconge;
