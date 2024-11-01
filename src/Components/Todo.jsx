import React, { useEffect, useRef, useState } from 'react';
import todo_icon from "../assets/todo_icon.png";
import TodoItems from './TodoItems';

const Todo = () => {
    
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")
        ?JSON.parse(localStorage.getItem("todos"))
        :[]
    );
    const inputRef = useRef();

    const addTodo = () => {
        const inputText = inputRef.current.value.trim();
        
        if(inputText === ""){
            return alert("Please Fill The Input Field.")
        }

        const newTodo = {
            id : Date.now(),
            text : inputText,
            isCompleted : false
        }

        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prev) =>{
            return prev.filter((todo) => todo.id !== id);
        })   
    }

    const toggle = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) =>{ 
                if(todo.id === id){
                    return {...todo, isCompleted : !todo.isCompleted}
                }
                return todo;
            });
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl'>

        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} className='w-8'/>
            <h1 className='text-3xl font-semibold'>Todo List</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input 
                className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' 
                type="text"
                placeholder='Add Your Task'
                ref={inputRef}
                 />
            
            <button
            className='border-none rounded-full text-sm bg-orange-600 w-32 h-14 text-white  font-medium'
            onClick={addTodo}>
                ADD +
            </button>
        </div>

        {/*---------------------- Todo Lists ----------------------*/}
        <div>
            {todoList.map((item, index)=>{
                return (
                    <TodoItems 
                        key={index}
                        text={item.text}
                        id={item.id}
                        isCompleted={item.isCompleted}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                )
            })}
        </div>

    </div>
  )
}

export default Todo