import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

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
                <ProductCard product={product}>
                    {/* Modos de envio de Componentes Hijos -- Compound - Técnica 1 */}
                    <ProductImage></ProductImage>
                    <ProductTitle title={""}></ProductTitle>
                    <ProductButtons></ProductButtons>
                </ProductCard>

                <ProductCard product={product}>
                    {/* Modos de envio de Componentes Hijos -- Compound - Técnica 1 */}
                    <ProductCard.Image></ProductCard.Image>
                    <ProductCard.Title title={"Producto 2"}></ProductCard.Title>
                    <ProductCard.Buttons></ProductCard.Buttons>
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage


