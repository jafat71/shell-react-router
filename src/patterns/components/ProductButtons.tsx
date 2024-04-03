import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
   className?:string;
   style?: React.CSSProperties; 
}

export const ProductButtons = ({className, style}:Props) => {
    const { counter, handleCounter } = useContext(ProductContext)
    return (
        <div  style={style} className={`${styles.buttonsContainer}  ${className}`}>
            <button className={styles.buttonMinus} onClick={() => handleCounter(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleCounter(1)}>
                +
            </button>
        </div>
    );
};