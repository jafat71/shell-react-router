/* eslint-disable @typescript-eslint/no-unused-vars */
import {ReactElement, createContext} from "react";

import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product.interfaces';

import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args:ProductCardHandlers) => JSX.Element;
    className?:string;
    style?: React.CSSProperties; 
    onChange?:(args:OnChangeArgs)=>void;
    value?:number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, handleCounter, MAX_COUNT, isMaxCountReached, reset } = useProduct({onChange,product,value, initialValues});
    return (
        <Provider value={{
            counter,
            handleCounter,
            product, 
            MAX_COUNT
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy: handleCounter,
                    reset
                })}
            </div>
        </Provider>
    );
};

