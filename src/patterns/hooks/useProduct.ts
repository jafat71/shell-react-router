import { useState } from "react"

const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter= (value:number) => {
        setCounter(pCounter => Math.max(pCounter+value,0))
    }

    return {
        counter,
        handleCounter
    }
}

export default useProduct
