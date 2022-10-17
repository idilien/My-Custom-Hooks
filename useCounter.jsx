import { useState } from "react"


 export const useCounter = (initalValue = 10 ) =>{

   const [counter, setCounter] = useState(initalValue)

   const incrementar = (value = 1) =>{
        setCounter(counter + value)
   }
   const decrementar = () =>{
        setCounter(counter - 1)
   }
   const reset = () =>{
        setCounter(value = 0)
   }

    return {
        counter,
        incrementar,
        decrementar,
        reset
    }
}