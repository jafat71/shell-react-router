import {ReactElement, createContext} from "react";

import { ProductContextProps, Product, OnChangeArgs } from "../interfaces/product.interfaces";

import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: React.CSSProperties; 
    onChange?:(args:OnChangeArgs)=>void;
    value?:number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
    const { counter, handleCounter } = useProduct({onChange,product,value});
    return (
        <Provider value={{
            counter,
            handleCounter,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};

