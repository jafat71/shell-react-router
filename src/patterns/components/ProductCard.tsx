import {createContext} from "react";

import { ProductContextProps, ProductCardProps } from "../interfaces/product.interfaces";

import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, handleCounter } = useProduct();

    return (
        <Provider value={{
            counter,
            handleCounter,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};

