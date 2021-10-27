import {React} from 'react'
import { useState } from 'react/cjs/react.development'
import ItemCount from '../ItemCount/ItemCount'

const DetailItems = ({ paramsId, obj }) => {

    const [carrito, setCarrito] = useState(0)
    const {name, price, category, description, urlimage, stock} = obj

    function Add(qty){
        setCarrito(carrito + qty)
        console.log(`Agregaste ${qty} items al carrito`)
    }
    console.log(carrito)
    return (
        <div id={paramsId} >
            <h2> PRODUCTO : {name}</h2>
            <img 
            className=
                'lg:h72 md:h-48 w-full object-cover object-center  group-hover:opacity-60 ' 
            src={urlimage} 
            alt="" 
            />
            <h3>{category}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <p>Stock: {stock}</p>
            <div>
                <ItemCount Add={Add} stock={stock} />
            </div>
        </div>
    )
}

export default DetailItems
