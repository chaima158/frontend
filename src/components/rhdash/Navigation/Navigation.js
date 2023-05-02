import React, { useState } from 'react'
import styled from 'styled-components'


import { menuItems } from '../../../utils/menuItems'
import { motion } from "framer-motion";
import { UilSignOutAlt ,UilBars} from "@iconscout/react-unicons";
import "./navigation.css";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navigation = ({active, setActive}) => {

    const { user } = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();  
    const handleLogoutte = () => {
        localStorage.clear();
        message.success("Logout Successfully");
        navigate("/home");
      }; 
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


            <div className="logoside" style={{ cursor: "pointer" }}>
           
                <div className="text">
                
                  
                  
                </div>
            </div>
            <div className="menuside">
                {menuItems.map((item) => {
                    return(
                     <>
                      
                        
                       <div className={ `menuItem ${  active === item.id ? 'menuItem active': ''} `}
                         key={item.id}
                         onClick={() => setActive(item.id)}> <div/>
                    
                       <div className=  {item.icon} ></div>
                       <div className="menu_link"> {item.title}</div>
                    </div>  
                    </>
                    );
                })}
            </div>
            <div className={`menuItem `} >
               
              
                    
                    <i className="fa-solid fa-right-from-bracket"  onClick={handleLogoutte}></i>
                    <Link to="/home"></Link>
            </div>
          
            
      </motion.div>
     
        </>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation