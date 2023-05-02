import React from "react";
import "./layout.css";
import { adminMenu, userMenu } from "../../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { motion } from "framer-motion";


import { UilSignOutAlt ,UilBars} from "@iconscout/react-unicons";
const Layout = ({ children }) => {
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
      icon: "fa-solid fa-bars-progress"
    },
   
   
  
   
    
   
    {
      name: "Gestion des congés",
      path: "/conge",
      icon: "fa-solid fa-list-check",
    },
    {
      name: "Les notes",
      path: "/todo",
      icon:"fa-solid fa-list-ol"
    },
    

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
    {
      name: "Rapport",
      path: "/rapport",
      icon: "fa-solid fa-list",
    }, 
    
    {
      name: "Attestation",
      path: "/certif",
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
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menuItemdash ${isActive && "menuItem active"} `}>
                      <div className={menu.icon}></div>
                    <div className="menu_link"> <Link to={menu.path}>{menu.name}</Link></div> 
                    </div>
                  </>
                );
              })}
              <div className={`menu-itemdash `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login"></Link>
              </div>
            </div>
        

              
            
            <div className="body">{children}</div>
          
       
     
      </motion.div>
    </>
  );
};

export default Layout;
