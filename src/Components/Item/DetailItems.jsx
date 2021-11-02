import {React} from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { useCartContext } from '../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const DetailItems = ({ paramsId, obj }) => {

    const {name, price, category, description, urlimage, stock, id} = obj
    const {products, testCart, addItem, removeFromCart, isInCart} = useCartContext();
    const [agregado, setAgregado] = useState(false)

    function onAdd(qty){
        setAgregado(true)
        addItem({
            id: id,
            name: name,
            category: category,
            price: price,
            description: description,
            stock: stock,
            urlimage: urlimage,
            qty: qty
        })
    }
    useEffect(() => {
        testCart();
    }, [products])
    
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
                {!isInCart(id)?
                <ItemCount Add={onAdd} stock={stock} initial={1} />
                :
                <div>
                <button className='w-max rounded-md items-center  bg-indigo-500 shadow-xl cursor-pointer outline-none transition-colors hover:bg-indigo-400 hover:text-black px-4'>
                    <Link to='/Cart'>
                    Finalzar Compra
                    </Link>
                </button>
                <button onClick={() => removeFromCart(id)} className='w-max rounded-md items-center  bg-red-500 shadow-xl cursor-pointer outline-none transition-colors hover:bg-red-400 hover:text-black px-4'>
                    Eliminar Carrito
                </button>
                </div>
                }        
            </div>
        </div>
    )
}

export default DetailItems
