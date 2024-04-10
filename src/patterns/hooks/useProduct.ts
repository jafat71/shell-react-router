import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product, InitialValues } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product;
    onChange?:(args: OnChangeArgs)=>void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ({onChange, product, value = 0,initialValues}:useProductArgs) => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count ? initialValues.count : value);
    const isMounted = useRef(false)
    const MAX_COUNT = initialValues?.maxCount ? initialValues.maxCount : null;

    useEffect(() => {
        isMounted.current = true
    }, [])
    
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(counter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCounter= (value:number) => {
        let newValue =  Math.max(counter+value,0)
        newValue = (MAX_COUNT) 
        ? Math.min(newValue,MAX_COUNT) 
        : newValue
        setCounter(newValue)
        onChange && onChange({count:newValue, product})
    }

    const reset = () => {
        setCounter(initialValues?.count || value )
    }

    return {
        counter,
        MAX_COUNT,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        handleCounter,
        reset
    }
}

export default useProduct
