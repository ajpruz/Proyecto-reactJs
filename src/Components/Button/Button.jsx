import React, { useState } from 'react'




const Button = ({Stock}) => {

/*     const click = (e) => {
        e.preventDefault()
        setTimeout(() => {
            alert("DIOS MIO!!!")
        }, 1000);
    } */
    const [cantidad, setCantidad] = useState(0)

    function add() {
        if (cantidad < Stock) setCantidad(cantidad + 1)
    }
    function remove() {
        if (cantidad >= 1) setCantidad(cantidad - 1)
    }
    console.log(cantidad)
    return (
        <div className='my-1'>
            <div className='flex p-4 font-bold font-sans text-sm m-4 bg-transparent rounded-full hover:bg-indigo-600 bg-opacity-25 transform items-center justify-center gap-8'>
                <button className='border-none bg-indigo-500 shadow-xl text-inherit rounded-full h-8 w-8 cursor-pointer outline-none transition-colors duration-200-ease-out transform duration-50-ease-out hover:bg-red-700 ' onClick={()=>remove()} > - </button>
                <span className='text-md text-white'>{cantidad}</span>
                <button className='border-none bg-indigo-500 shadow-xl text-inherit rounded-full h-8 w-8 cursor-pointer outline-none transition-colors duration-200-ease-out transform duration-50-ease-out hover:bg-green-700 'onClick={()=>add()} > + </button>
            </div>
            <div className='flex justify-center h-9'>
                <button className='w-max rounded-md items-center  bg-indigo-500 shadow-xl cursor-pointer outline-none transition-colors hover:bg-indigo-300 hover:text-black px-4' >Add Cart</button>
            </div>
        </div>
    )
}

export default Button
