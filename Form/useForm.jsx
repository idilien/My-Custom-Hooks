import { useState } from "react"

export const useForm = (init = {}) => {
    const[formState,setFormState] = useState(init)

      const onInputChange = ({target}) =>{
          const {name, value} = target
          setFormState({
            ...formState, 
            [name]: value
          })
        }

        const onResetForm = () =>{
            setFormState(init)
        }

  return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
