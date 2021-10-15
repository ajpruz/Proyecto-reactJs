import React, {useState, useEffect} from 'react'
import { api } from '../../helpers/api'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'


const ContainerItems = () => {

    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)


    useEffect(() => {
        api.get()
        .then(resp => {
            setItems(resp.data)
            setLoading(false)
        })
        
        setTimeout(() =>{
        }, 2000)
    }, [])

    return (
        <div className="sm:container my-8 flex justify-center flex-wrap ">
            {
                Loading
                ?
                <Spinner/>
                :
                Items.map((obj) => (
                    <Item mire={obj} />
                ))

            }
        </div>
    )
}

export default ContainerItems
