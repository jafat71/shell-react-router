/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import {products} from "../data/products"

const ShoppingPage = () => {
    
    const {shoppingCart,onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr></hr>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }
            }>

                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductCard.Image className="custom-image"></ProductCard.Image>
                            <ProductCard.Title className="text-white text-bold"></ProductCard.Title>
                            <ProductCard.Buttons className="custom-buttons text-white"></ProductCard.Buttons>
                        </ProductCard>
                    ))
                }
            </div>

            {/* Barra Lateral - Shopping Cart */}
            <div className="shopping-cart">
                {
                    Object.keys(shoppingCart).length !== 0 && 
                        Object.values(shoppingCart).map((product) => {
                            return <ProductCard 
                                product={product} 
                                className="bg-dark"
                                key={product.id}
                                style={{ width: '100px' }}
                                value={product.count}
                                onChange={onProductCountChange}
                                >
                                <ProductCard.Image className="custom-image"></ProductCard.Image>
                                <ProductCard.Buttons className="custom-buttons text-white" style={{ display: 'flex', justifyContent: 'center' }}></ProductCard.Buttons>
                            </ProductCard>
                        })
                    
                }

            </div>
        </div>
    )
}

export default ShoppingPage


