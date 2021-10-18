import React, {useState, useEffect} from 'react'
import { api } from '../../helpers/api'
import Item from '../Item/Item'
import SearchButton from '../SearchButton/SearchButton'
import Spinner from '../Spinner/Spinner'

const ContainerItems = () => {

    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Users, setUsers] = useState([])
    const [Search, setSearch] = useState([])


    useEffect( async () => {
       await api.get()
        .then(resp => {
            setItems(resp.data)
            setUsers(resp.data)
            setLoading(false)
            console.log(Items)
        })
        setTimeout(() =>{
        }, 2000)
    }, [])

    return (
        <div>
            <div className='flex justify-center'>
                <SearchButton Search={Search} setSearch={setSearch} users={Users} setItems={setItems}/>
            </div>
            <div className="sm:container my-8 flex justify-center flex-wrap ">
                {
                    Loading
                    ?
                    <Spinner/>
                    :
                    Items.map((obj, index) => (
                        <Item 
                        mire={obj} 
                        key={index} // 0, 1, 2, 3, 4, etc...
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ContainerItems