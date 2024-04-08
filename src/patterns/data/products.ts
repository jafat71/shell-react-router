import { Product } from "../interfaces/product.interfaces"

const product = {
    id: '1',
    title: "Coffe Mug",
    img: "./coffee-mug.png"
}

const product2 = {
    id: '2',
    title: "Coffe Mug Meme",
    img: "./coffeemug2.png"
}

export const products: Product[] = [
    product,
    product2
]