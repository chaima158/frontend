import React, { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import myImage from "../../assets/certif.png";
import "./certif.css";
import Layout from "../../components/Layout/Layout";
const Certif = () => {
  const certificateWrapper = useRef(null);
  const [Name, setName] = useState("");
  const [Prenom, setPrenom] = useState("");

  const handleDownload = (e) => {
    e.preventDefault();
    exportComponentAsPNG(certificateWrapper, {
      html2CanvasOptions: { backgroundColor: null },
    });
  };

  return (
         
    <div className="voice">
    <div className="voicedach  ">
    <Layout/>
    <h1 className="h2 mb-10 mt-10 ml-10 ">Attestation de travail</h1>
    <div className="mt-20 ">
    <div className="Certif ">
      <div className="Meta">
        
        
        <input
        
          type="text"
          placeholder="Nom de l'employé"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Post de l'employé"
          value={Prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <button onClick={handleDownload}>Télécharger</button>
      </div>
      <div id="downloadWrapper" ref={certificateWrapper}>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop:"10rem",
            marginLeft:"-20rem",
            
          }}
          id="certificateWrapper"
        >
          <h8>{Name}</h8>
          <br />
          <div>
            <p>Dans la post "{Prenom}"</p>
          </div>
          
          <img src={myImage} alt="Certificate" height={400}  />
          
        </div>

      </div>
    </div>
    </div>
    </div>
    </div>
   
  );
};

export default Certif;