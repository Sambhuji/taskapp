import { BiSolidPlusCircle } from "react-icons/bi";

export const TodoForm = ({handleSubmit, inputValue}) => {

    return (<form onSubmit={handleSubmit}>

    <div className={`my-8 md:bg-slate-300 bg-white md:w-[60%] w-[80%] gap-4 mx-auto flex flex-col md:flex-row items-center justify-center rounded-full`}>

        <input ref={inputValue} type="text" className={`md:bg-transparent bg-slate-300 py-1 md:flex-1 w-full rounded-full outline-none border-none pl-5 placeholder:text-gray-400`} placeholder="Enter your task"/>

        <button type="submit" className={`border-none`}><BiSolidPlusCircle className={`text-4xl text-green-600 bg-orange-500 rounded-full`} /></button>

    </div>

   </form>)
}