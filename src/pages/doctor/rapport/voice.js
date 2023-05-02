import React, { useState, useEffect, useRef } from 'react'
import './voice.css'
import { useReactToPrint } from "react-to-print";
import Layout from '../../../components/Layout/Layout';
import { Link } from 'react-router-dom';


const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'fr-FR'

function Voice() {
  const conponentPDF= useRef();
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }
  const generatePDF= useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data saved in PDF")
});

  return (
   
    <div className="voice">
    <div className="voicedach  ">
    <Layout/>
    

      <div >
     
      <div ><h1 class="h2 mb-10 ">Réaliser un rapport</h1></div>
    <button className= 'statusthpendingdownold'   onClick={ generatePDF}>  Enregister</button >  
        <div className="boxvoiceeee">
      <h1 class="h4 " >Rapport</h1>
          
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button className= 'statusthpendingdownold'   onClick={ generatePDF}>  Télécharger</button >  
          <button  className='statusthdeliveredvoice'onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button  className='statusthdeliveredvoice'>
           <Link to={"rapportecrit"}>Ecrire</Link> 
          </button>
          <button className= 'statusthshippedvoice 'onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          
          <p>{note}</p>
        </div>
        <div ref={conponentPDF} style={{width:'100%'}}>
        <div className="boxvoiceeee">
          
        <h1 class="h4 ">Rapport </h1>
        
          <h2></h2>     {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
         
        </div>
      
        </div>
        <div className="d-grid d-md-flex justify-content-md-end mb-3">
                             
        </div> 
      </div></div>
</div>
  
  )
}

export default Voice