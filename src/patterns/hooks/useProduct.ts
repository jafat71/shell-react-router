import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/product.interfaces"

interface useProductArgs {
    product: Product;
    onChange?:(args: OnChangeArgs)=>void;
    value?: number;
}

const useProduct = ({onChange, product, value = 0}:useProductArgs) => {
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    useEffect(() => {
        setCounter(value)
    }, [value]);

    const handleCounter= (value:number) => {
        //se mantiene la referencia del estado del contador no para cambair valor sino para imprimir
        if(isControlled.current){
            return onChange!({count:value, product})
        }
        //este codigo es inalcanzable cuando se ejecuta el cambio de counter desde padre 
        //cuando no se envia props este codigos e ejcuta
        const newValue =  Math.max(counter+value,0)
        setCounter(newValue)
        onChange && onChange({count:newValue, product})
    }

    return {
        counter,
        handleCounter
    }
}

export default useProduct
