import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'

const Item = () => {
    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)


    const getItems = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{
            setItems(data)
            console.log(data)
        })
    }

    useEffect(() => {
        getItems()
        setTimeout(() =>{
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
            Loading
            ?
            <Spinner/>
            :
            Items.map((item) => (
                <div className=" box-border h-62 w-62 border-4" key={item.id}>
                    <h2>{item.title}</h2>
                    <img className='h-48' src={item.image} alt="" />
                    <p>{item.description}</p>
                    <span>Price: {item.price}</span>
                    <p>Stock: {item.rating.count}</p>
                    <Button/>
                </div>
            ))
        }
        </div>
    )
}

export default Item
