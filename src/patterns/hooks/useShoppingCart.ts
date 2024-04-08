/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interfaces";

export const useShoppingCart = () => {
    // props:[key:String]->objeto que maneja x cantidad de llaves cuyo valor es un ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    // e (evento)-> {count,product}
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        if (count === 0) {
            const { [product.id]: zeroProd, ...updatedCart } = { ...shoppingCart }
            return setShoppingCart({ ...updatedCart })
        }
        setShoppingCart({
            ...shoppingCart,
            [product.id]: { ...product, count } // [id] -> llave computada
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}