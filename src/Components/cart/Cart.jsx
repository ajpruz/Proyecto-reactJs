import React from 'react'
import { useCartContext } from '../Context/CartContext'


const Cart = () => {

    const {products} = useCartContext();

    return (
        <>
            <h1>CARRITO DE COMPRAS</h1>
            <div>
                {products.map((item, key) =>(
                    <div key={key.id}>
                    <div>
                        {item.urlimage}
                    </div>
                        <h1>{item.name}</h1>
                        <h2>{item.qty}</h2>
                        <p>{item.stock}</p>
                        <p>{item.price}</p>
                    </div>
                ))
                
                
                
                }
            </div>

       </>
    )
}

export default Cart
