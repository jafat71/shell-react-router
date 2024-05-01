import { useState } from "react";

const useForm = <T>(initState:T) => {
    const [data, setData] = useState(initState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setData(prevState=>({
            ...prevState,
            [event.target.name]:event.target.value
        }))
    }

    const resetForm = () => {
        setData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...data,
        data,
        onChange,
        resetForm,
        isValidEmail
    }
}

export default useForm
