/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products"

const product = products[0]

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>


            <ProductCard
                product={product}
                className="bg-dark"
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({reset,increaseBy,isMaxCountReached,count}) => (
                        <>                       
                            <ProductCard.Image className="custom-image"></ProductCard.Image>
                            <ProductCard.Title className="text-white text-bold"></ProductCard.Title>
                            <ProductCard.Buttons className="custom-buttons text-white"></ProductCard.Buttons>
                            <button onClick={reset} style={{backgroundColor:'rgb(56,56,56)', color: 'white', borderColor: 'white', padding: 8}}>Reset</button>
                            <button onClick={()=>increaseBy(-2)} style={{backgroundColor:'rgb(56,56,56)', color: 'white', borderColor: 'white', padding: 8}}>-2</button>
                            <button onClick={()=>increaseBy(+2)} style={
                                isMaxCountReached 
                                ? {backgroundColor:'rgb(56,56,56)',borderColor: 'gray', color: 'gray', padding: 8} 
                                : {backgroundColor:'rgb(56,56,56)', color: 'white', borderColor: 'white', padding: 8}
                                }>+2</button>
                            <span style={{color: 'white', padding: 10}}>Counter: {count}</span>
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}

export default ShoppingPage


