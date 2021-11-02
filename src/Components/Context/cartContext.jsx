import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    
    const testCart = () => {
        console.log("products", products)
    }
    const addItem = ({id, description, price, name, category, stock, urlimage, qty}) => {
        if (isInCart(id)) {
            const productsInCart = [...products];
            const itemToAdd = productsInCart.find((i) => { 
                return (i.id === (id))
            })
            itemToAdd.qty += qty;
            setProducts(productsInCart)
        }else {
            setProducts([
                ...products,
                {id, description, price, name, category, stock, urlimage, qty}
            ]);
        }
        
    };
    const removeFromCart = (id) => {
        let filterCart = products.filter((item) => {
            return item['id'] !== id;
        });
        setProducts(filterCart);
    };

    const isInCart = (id) => {
        return products.some((item) => {
            return item['id'] === id;
        })
    }
    return(
        <CartContext.Provider value={ {products, setProducts, testCart, addItem, removeFromCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}
