import React from 'react'
import { useParams } from 'react-router'
import ItemDetailContainer from '../ContainerItems/ItemDetailContainer';

const DetailPage = () => {

    let { id }  = useParams();


    return (
        <div>
            <ItemDetailContainer paramsId={id}/>      
        </div>
    )
}

export default DetailPage
