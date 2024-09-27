import { useEffect, useState } from "react"

export const DateTime = () => {

    const [date, setDate] = useState();

   useEffect(() => {
    const interval = setInterval(() => {

        const now = new Date();
        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();
        setDate(`${currentDate} - ${currentTime}`)
        
       }, 1000);
    
       return () => clearInterval(interval)
   }, [])
 

    return <p className={`mt-4 text-center`}>{date}</p>


}