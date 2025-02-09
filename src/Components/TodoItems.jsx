import React from 'react';
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({text, id, isCompleted, deleteTodo, toggle}) => {

  return (
    <div className='flex items-center my-3 gap-2'>
        
        <div onClick={()=>toggle(id)} className='flex flex-1 items-center cursor-pointer'>
            {
                isCompleted
                ? <img src={tick} alt="" className='w-7'  />
                : <img src={not_tick} alt="" className='w-7' />
            }
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
                ${isCompleted ? "line-through" : ""}`}
            >
                {text}
            </p>
        </div>


        <img src={delete_icon} className='w-3.5 cursor-pointer' onClick={()=>deleteTodo(id)}/>
    </div>
  )
}

export default TodoItems