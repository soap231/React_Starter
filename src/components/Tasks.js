import { FaTimes } from 'react-icons/fa'
import { useState } from "react"

import store from '../redux/store-config';
// {tasks, onDelete} destructuring assignment from props
const Tasks = ({tasks, onDelete}) => {

    const [counter, setCounter] = useState(0);



    const increaseCounter = ()=>{
        setCounter(counter+1)
    }

    const deleteOne = ()=>{
        store.dispatch({
            type: "DELETE",
            payload: 3,
        })
        console.log(store.getState())
    }

      

      
      
      // {value: 2}

    return (
        <div>
            {tasks.map((task) => (<h3 id={task.id}>{task.text}
            <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick = {()=>onDelete(task.id)} /></h3>))}
            <button onClick={increaseCounter}> Click me to increase by 1:  {counter}</button>
            <button onClick={deleteOne}> Click me to delete 1:  </button>
        </div>
    )
}

export default Tasks
