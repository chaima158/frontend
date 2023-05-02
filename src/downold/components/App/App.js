import { useState, useRef, useEffect } from "react";
import ClientDetails from "../ClientDetails";
import Dates from "../Dates";

import Header from "../Header";
import MainDetails from "../MainDetails";
import Notes from "../Notes";
import Table from "../Table";
import TableForm from "../TableForm";
import ReactToPrint from "react-to-print";
import { DonateButton } from "../../buttons";
import Layout from "../../../components/Layout/Layout";
import"./app.css";
import Footer from "../Footer";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  // const [invoices, setInvoices] = useState([]);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience");
    }
  }, [width]);

  return (

<>
     

    

      <main
        className="m-2 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
       
      >
        
        <section>
        <div className="text-center"><h1 class="h2 mb-10 ">Etablir facture</h1></div>
        
          <div className="bg-white p-8 rounded shadow">
            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
 
            
              <article className="containerinvoice">
                
              <div className="register-formdow">
                
                  <input 
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Nom du société"
                    autoComplete="off"
                    className="inputdow "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="register-formdow ">
              
                  <input
                    className="inputdow "
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Votre adresse"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
             
             
      
                </article>
                <article className="containerinvoice">
                <div className="register-formdow ">
                
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="inputdow "
                    placeholder="Email de Société"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>   <div /> 
              
                <div className="register-formdow ">
             
                  <input
                    type="url"
                    name="website"
                    className="inputdow "
                    id="website"
                    placeholder="Votre siteweb"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div></article>
                <article className="containerinvoice">
                <div className="register-formdow ">
              
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="inputdow "
                    placeholder="Votre télephone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
           
                
           
                <div className="register-formdow ">
              
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    className="inputdow "
                    placeholder="Nom de votre bank"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>   
           </article>
           <article className="containerinvoice">
                <div className="register-formdow ">
                 
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    className="inputdow "
                    placeholder="Votre numéro de compte bancaire"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
            

            
                <div className="register-formdow ">
                 
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    className="inputdow "
                    placeholder="Nom du employé"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                </article>
                <article className="containerinvoice">
                <div className="register-formdow ">
                 
                  <input
                    className="inputdow "
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="L'adresse du employé"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div> 
             

              
                <div className="register-formdow ">
               
                  <input
                    className="inputdow "
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Numéro de facture"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                </article>
                <article className="containerinvoice">
                <div className="register-formdow ">
                 
                  <input 
                    className="inputdow "
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="
                    Date de facturation"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="register-formdow ">
            
                  <input
                    className="inputdow "
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div></article>
                <input
                name="notes"
                className="inputdow "
                id="notes"
                cols="30"
                rows="10"
                placeholder="Ajouter des notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></input>

              {/* This is our table form */}
             
             
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
            

            
             </div>

           
          
         
         
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded">
          <ReactToPrint
            trigger={() => (
              <button className="statusthpendingajout">
               Imprimer
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} email={email}  bankAccount={ bankAccount}  />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />

          
          </div>
          {/* <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button> */}
           <Footer/>
        </div>
       
      </main>
  
     
    </>
  );
}

export default App;
