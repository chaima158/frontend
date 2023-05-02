import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <section
    className='ml-[200px] xl:mt-[200px] min-w-max '
    
    data-aos-offset='350'
  >
    <div className='container mx-auto'>
    <div className='bg-purple-300/[30%] rounded-[50px] min-h-[560px]  px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[20px] xl:pb-0'>
          {/* image */}
          <div className='flex-1' >
            <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
       
      </div>
            
      <div className="card-header">
         Ressource Humaine {doctor.firstName} {doctor.lastName}
        </div>
      
        
        <div className="card-body">
         
          <p>
            <b>Bienvenue avec nous</b> 
          </p>
          <p>
            <b>vous pouvez avoir des conges ici</b>
          </p>
          <p>
            <b></b> 
          </p>
          <p>
            <b></b> 
          </p>
        </div>
      </div></div>  
 </div></section>
  );
};

export default DoctorList;
