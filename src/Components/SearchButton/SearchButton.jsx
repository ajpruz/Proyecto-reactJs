import React from 'react'




const SearchButton = ({Search, setSearch, users, setItems}) => {
 
    const handleChange = (e)=> {
        setSearch(e.target.value)
        filtrar(e.target.value)
    }
    const filtrar = (SearchTerm)=>{
        let resultadoBusqueda=users.filter((elemento) =>{
            if(elemento.title.toString().toLowerCase().includes(SearchTerm.toLowerCase())
            ){
                return elemento;
            }
        });
        setItems(resultadoBusqueda);
    }
    return (
        <form className='rounded' >
            <input 
            className='md:w-36 w-20 rounded-l focus:ring-2 focus:ring-blue-600' 
            type="text" 
            value={Search}
            onChange={handleChange}
            />
            <button 
            className='bg-indigo-600 hover:bg-indigo-300 hover:text-black rounded-r' 
            type='submit'
            >Buscar</button> {/*Cuando se haga click en este boton se ejecutara el handleSubmit*/}
        </form>  
    )
}

export default SearchButton
