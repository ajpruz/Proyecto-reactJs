import React from 'react'

const DetailItems = ({ paramsId, obj }) => {

    const {title, price, category, description, image} = obj

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
        </div>
    )
}

export default DetailItems
