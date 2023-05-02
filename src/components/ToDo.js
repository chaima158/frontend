import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="card">
            <div className="">{text}</div>
            <div className="iconstodo">
                <BiEdit className='icontodo' onClick={updateMode} />
                <AiFillDelete className='icontodo' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo