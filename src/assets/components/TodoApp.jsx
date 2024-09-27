import { FaTasks } from "react-icons/fa";

import { DateTime } from "./DateTime";
import { useRef, useState } from "react";


import { TodoForm } from "./ToDoForm";
import { TodoList } from "./TodoList";


export const TodoApp = ()  => {

    const inputValue = useRef();
    const alertEmpty = useRef();
    const alertDuplicate = useRef();
    const [items, setItems] = useState(localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')) : []);

    // submit function 
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentInputValue = inputValue.current.value.trim();
        if(!currentInputValue){
            return alertEmpty.current.style.display = 'flex';
        }
        const duplicate = items.find((item) => item.task === currentInputValue);
        if(duplicate) {
            inputValue.current.value = "";
            return alertDuplicate.current.style.display = 'flex';
        } 
        const addNewItem = [{id:new Date(), task:currentInputValue, completed:false}, ...items];
        localStorage.setItem('items', JSON.stringify(addNewItem));
        setItems(addNewItem);
        inputValue.current.value = "";
    }




    // delete all items

    const handleClear = () => {
        const empty = [];
        localStorage.setItem('items', JSON.stringify(empty));
        setItems(empty);
    }

    // delete a task

    const handleDelete = (val) => {
        const updateItems = items.filter((item) => item.task !== val);
        localStorage.setItem('items', JSON.stringify(updateItems));
        setItems(updateItems);
    }

    // update completed status

    const handleCheck = (index) => {
       console.log(index);

      const updateStatus =  items.map((item, inx) => {
            if(inx === index) {
                return {...item, completed: !item.completed}
           }
           return item;
      });

      localStorage.setItem('items', JSON.stringify(updateStatus));
      setItems(updateStatus);
       
    }
        
        
        



    return (
        <section className={`bg-white max-w-[650px] mx-auto p-7 rounded-xl min-h-[550px] relative`}>
            <div className={`flex justify-center items-center gap-4`}>
            <FaTasks className={`text-3xl font-semibold text-green-600`} />
            <h1 className={`text-3xl font-semibold`}>To Do List</h1>
            </div>

            <DateTime />
        
            <TodoForm handleSubmit={handleSubmit} inputValue={inputValue} />

            <section>
                <ul>
                    {items.map((item, index) => {
                        return <TodoList key={item.id} item={item} handleDelete={() => handleDelete(item.task)} handleCheck={() => handleCheck(index)}> </TodoList>
                    })}
                </ul>
            </section>

            <div className="flex select-none justify-center items-center mt-4 absolute bottom-6 md:right-[45%] right-[40%]">
                <button onClick={handleClear} className={`border-none bg-red-600 text-white py-1 px-2 rounded-lg`}>Clear All</button>
            </div>

            <div ref={alertEmpty} className={`hidden absolute top-[10%] right-[25%] bg-slate-950 w-[50%] h-[30%] z-50 rounded-lg flex-col justify-center items-center`}>
            <p className={`text-red-600 mb-4 text-2xl font-semibold`}>Add a task</p>
            <button onClick={() => alertEmpty.current.style.display = 'none'} className={`bg-blue-600 text-white py-1 px-2 rounded-md`}>OK</button>
            </div>


            <div ref={alertDuplicate} className={`hidden absolute top-[10%] right-[25%] bg-slate-950 w-[50%] h-[30%] z-50 rounded-lg flex-col justify-center items-center`}>
            <p className={`text-red-600 mb-4 text-2xl font-semibold`}>This Item already exists</p>
            <button onClick={() => alertDuplicate.current.style.display = 'none'} className={`bg-blue-600 text-white py-1 px-2 rounded-md`}>OK</button>
            </div>



        </section>
    )
}