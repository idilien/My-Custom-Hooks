import { useState } from "react"


 export const useCounter = (value ) =>{

   const [counter, setCounter] = useState(value)

   const increment = (value = 1) =>{
        setCounter(counter + value)
   }
   const decrement = () =>{
        setCounter(counter - 1)
   }
   const reset = () =>{
        setCounter(value = 0)
   }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}