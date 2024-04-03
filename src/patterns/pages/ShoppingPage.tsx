import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: "Coffe Mug",
    img: "./coffee-mug.png"
}

const ShoppingPage = () => {
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
                <ProductCard product={product} className="bg-dark">
                    {/* Modos de envio de Componentes Hijos -- Compound - Técnica 1 */}
                    <ProductImage className="custom-image"></ProductImage>
                    <ProductTitle title={""} className="text-white text-bold"></ProductTitle>
                    <ProductButtons className="custom-buttons text-white"></ProductButtons>
                </ProductCard>

                <ProductCard product={product} className="bg-dark">
                    {/* Modos de envio de Componentes Hijos -- Compound - Técnica 2 */}
                    <ProductCard.Image className="custom-image"></ProductCard.Image>
                    <ProductCard.Title title={"Producto 2"} className="text-white text-bold"></ProductCard.Title>
                    <ProductCard.Buttons className="custom-buttons text-white"></ProductCard.Buttons>
                </ProductCard>

                <ProductCard product={product} className="text-white" style={{
                    backgroundColor: "#222ddd",
                }}>
                    {/* Modos de envio de Componentes Hijos -- Compound - Técnica 1 */}
                    <ProductImage style={{
                        opacity: 0.85
                    }}></ProductImage>
                    <ProductTitle style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: "center",
                    }} ></ProductTitle>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: "center"
                    }} className="custom-buttons text-white"></ProductButtons>
                </ProductCard>


            </div>
        </div>
    )
}

export default ShoppingPage


