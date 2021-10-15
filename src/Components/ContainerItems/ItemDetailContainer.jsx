import React, { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import DetailItems from '../Item/DetailItems'
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = ({id}) => {
    const [Detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() =>{
        const urlDetails = `${id}`
        api.get(urlDetails)
        .then(resp => {
            setDetail(resp.data)
            setLoading(false)
        })
        setTimeout(() => {
        }, 2000);
    },[])


    return (
        <div>
            {
                loading
                ?
                <Spinner/>
                :
                <DetailItems key={id} obj={Detail} />
            }
            
        </div>
    )
}

export default ItemDetailContainer
