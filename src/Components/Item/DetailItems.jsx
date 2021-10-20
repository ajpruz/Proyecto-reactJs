import React from 'react'
import { useState } from 'react/cjs/react.development'
import ItemCount from '../ItemCount/ItemCount'

const DetailItems = ({ paramsId, obj }) => {

    const [carrito, setCarrito] = useState(0)
    const {title, price, category, description, image, rating} = obj

    function Add(qty){
        setCarrito(carrito + qty)
        console.log(`Agregaste ${qty} items al carrito`)
    }
    console.log(carrito)
    return (
        <div id={paramsId} >
            <h2> PRODUCTO  {title}</h2>
            <img 
            className=
                'lg:h72 md:h-48 w-full object-cover object-center  group-hover:opacity-60 ' 
            src={image} 
            alt="" 
            />
            <h3>{category}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <p>Stock: {rating.count}</p>
            <div>
                <ItemCount Add={Add} stock={rating.count} />
            </div>
        </div>
    )
}

export default DetailItems
