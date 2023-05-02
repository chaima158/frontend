import React, {useState, useMemo} from 'react'
import styled from "styled-components";


import Orb from '../../../components/rhdash/Orb/Orb'
import Navigation from '../../../components/rhdash/Navigation/Navigation'
import Dashboardrh from '../../../components/rhdash/Dashboardrh/Dashboardrh';
import Income from '../../../components/rhdash/Income/Income'
import Expense from '../../../components/rhdash/Expenses/Expenses';
import Invoice from "../../../downold/components/App/App"
import { useGlobalContext } from '../../../context/globalContext';
import { GlobalStyle } from '../../../styles/GlobalStyle';
import { GlobalProvider } from '../../../context/globalContext';
import Login from "../../Employee/Login/Login"
import "./expenses.css";

function Expenses() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboardrh />
      case 2:
        return <Dashboardrh />
      case 3:
        return <Income />
      case 4: 
        return <Expense />
    case 5: 
        return <Invoice />
       
       
      default: 
        return <Dashboardrh />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <>
    <GlobalProvider>
    <div className="Expenses">
    <div className="Expensesdash ">

  
   
  
    
   
   <GlobalStyle/>
  
      {orbMemo}
    
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
     
  
    </div></div>
  
    </GlobalProvider>
    </>
  );
}



   
;

export default Expenses;
