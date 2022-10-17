import { useEffect, useState} from "react"


export const useFetch = (url) => {

    const [state, setState] = useState ({
        data: null,
        isloading: true,
        hasError:null
    })

    const getFetch = async ( ) =>{

        setState({
            ...state,
            isloading:true
        })

      const respuesta = await  fetch(url);
      const data = await respuesta.json()

        setState({
            data,
            isloading:false,
            hasError:null
        })
        }

    useEffect(() => {
    getFetch()
    }, [url])
    
    return {
        data: state.data,
        isloading: state.isloading,
        hasError: state.hasError
    };
}
