import { useEffect, useState } from "react";
import ToDo from "../../components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../../utils/HandleApi";
import "./todo.css";
import Layout from "../../components/Layout/Layout";
import { Button } from "antd";


const Todo = () =>{

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="to">
    <div className="toto ">
<Layout/>
<div>
<sectiontodo>
      <div className="containertodo">

      <div className="text-center"><h1 class="h2 mb-10 ">Liste des taches demandés </h1></div>

      <div  >
          <input
          className="addtodo"
            type="text"
            placeholder="     Ajouter une tâche ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          
          <div className="btntodo"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Mise à jour" : "Ajouter"}</div>
         

        </div>

        <div className="cards">
         

          {toDo.map((item) => <ToDo className= "card"
          
            key={item._id} 
          text={item.text}
          
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)}
          
           />)}
</div>
       
        </div>
        </sectiontodo>
      </div>
</div>
</div>
  
  );
}

export default Todo;
