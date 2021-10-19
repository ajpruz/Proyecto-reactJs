import React from 'react'
import { useState } from 'react/cjs/react.development'
import Button from '../Button/Button'

const DetailItems = ({ paramsId, obj }) => {

    const [carrito, setCarrito] = useState([])
    const {title, price, category, description, image, rating} = obj

    function onAdd(){
        const exist = carrito.find(x => x.id === obj.id)
        if(exist){
            setCarrito(carrito.map(x => x.id === obj.id ? {
                ...exist, qty: exist.qty + 1
            } : x))
        } else {
            setCarrito([...carrito, {...obj, qty: 1}])
        }
    }
    function onRemove (){
        const exist = carrito.find((x) => x.id === obj.id);
        if(exist.qty ===1){
            setCarrito(carrito.filter((x) => x.id !== obj.id))
        } else {
            setCarrito( carrito.map((x) => x.id === obj.id ? { ...exist, qty: exist.qty - 1} : x))
        }
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
                <Button carrito={carrito} onRemove={onRemove} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default DetailItems
