import React from 'react';
import { Link } from 'react-router-dom';

function Item({ mire }) {

    const { title, id, image, price, rating } = mire;

    return (
        <div className='container p-4 sm:w-1/2 lg:w-1/3'>
            <div className="group h-full border-2 border-none border-opacity-60 hover:shadow-xl rounded-lg overflow-hidden" key={id}>

                <Link to={`/menu/${id}`}><img
                    className='lg:h72 md:h-48 w-full object-cover object-center  group-hover:opacity-60 ' src={image} alt="" />
                </Link>
                <div className='p-6 bg-indigo-700 text-white '>
                    <h2 className='text-base font-medium text-indigo-200 mb-1'>{title}</h2>
                    <p className='text-2xl font-semibold mb-3'>Price: {price}</p>
                    <p>Stock:{rating.count}</p>
                    <div className='flex items-center justify-center'>
                        <Link to={`/menu/${id}`}>
                        <button className='w-max rounded-md items-center  bg-indigo-500 shadow-xl cursor-pointer outline-none transition-colors hover:bg-indigo-300 hover:text-black px-4'>COMPRAR</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item
