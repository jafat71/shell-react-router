/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interfaces";

export const useShoppingCart = () => {
    // props:[key:String]->objeto que maneja x cantidad de llaves cuyo valor es un ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    // e (evento)-> {count,product}
    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart=>{
            //verifica existencia o sino lo iniicializa
            const productInCart:ProductInCart = oldShoppingCart[product.id] || {...product, count:0}
            //ADDICIONAR PRODUCTO
            //Adicion se hace en el objeto que maneja el estado del carrito con sus respectivos objeto, no en el componente product como tal
            if(Math.max(productInCart.count + count, 0)>0){
                productInCart.count+=count
                return {
                    ...oldShoppingCart,
                    [product.id]:productInCart
                }
            }
            //ELIMINAR PRODUCTO
            //eliminación por desesructuración
            const { [product.id]: zeroProd, ...updatedCart } = { ...shoppingCart }
            return updatedCart 
        })

        // if (count === 0) {
        //     const { [product.id]: zeroProd, ...updatedCart } = { ...shoppingCart }
        //     return setShoppingCart({ ...updatedCart })
        // }
        // setShoppingCart({
        //     ...shoppingCart,
        //     [product.id]: { ...product, count } // [id] -> llave computada
        // })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}