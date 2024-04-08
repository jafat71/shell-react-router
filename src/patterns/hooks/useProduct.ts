import { useEffect, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/product.interfaces"

interface useProductArgs {
    product: Product;
    onChange?:(args: OnChangeArgs)=>void;
    value?: number;
}

const useProduct = ({onChange, product, value = 0}:useProductArgs) => {
    const [counter, setCounter] = useState(value)

    useEffect(() => {
        setCounter(value)
    }, [value]);

    const handleCounter= (value:number) => {
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
