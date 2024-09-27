import { IoTrashBin } from "react-icons/io5";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

export const TodoList = ({item, handleDelete, handleCheck}) => {

    return <li className={`mb-3`}>
    <div className={`flex items-center justify-between`}>
     
    <div onClick={handleCheck}>
    <MdRadioButtonUnchecked  className={`text-2xl text-gray-500 cursor-pointer ${item.completed? "hidden" : "block"}`}/>
    <MdCheckCircle className={`text-2xl text-green-500 cursor-pointer ${item.completed? "block" : "hidden"}`}/>
    </div>

    <p className={`text-xl select-none font-semibold w-[90%] text-start ${item.completed? "line-through text-green-600" : "text-gray-600"}`}>{item.task}</p>

    <IoTrashBin onClick={handleDelete} className={`text-xl text-red-500 cursor-pointer`}/>

    </div>

   </li>
        

}