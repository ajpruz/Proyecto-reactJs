import React, {useState, useEffect} from 'react'
import { api } from '../../helpers/api'
import { getFirestore } from '../../services/getFirebase'
import Item from '../Item/Item'
import SearchButton from '../SearchButton/SearchButton'
import Spinner from '../Spinner/Spinner'

const ContainerItems = () => {

    const [Items, setItems] = useState([])
/*     const [Item, setItem] = useState({}) */
    const [Loading, setLoading] = useState(true)
    const [Users, setUsers] = useState([])
    const [Search, setSearch] = useState([])


    useEffect(() => {
        const db = getFirestore()
        db.collection('Items').get()

            /*         db.collection('Items').doc('NwHH4V7HMk10ujdfWvGS').get()
        .then(resp => setItem( {id: resp.id, ...resp.data()} )) */
        .then(resp => {
                setItems(resp.docs.map(it => ({id: it.id, ...it.data() })))
                setItems(resp.docs.map(it => ({id: it.id, ...it.data() })))
                setLoading(false)
            })
            setTimeout(() =>{
            }, 2000)
        },[])
        console.log(Items)


        
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