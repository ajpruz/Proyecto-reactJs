import React, { useState } from 'react'

const initialState = {
    name:"",
    email:"",
    password:"",
}

const Form = () => {
    const [state, setState] = useState(initialState);

    const { name, email, password } = state;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleClick = (e) => {
        e.preventDefault();
        if(!name || !email || !password) {
            alert("Campo Vacio");
            return;
        }
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input name="name" 
                value={name} 
                onChange={handleChange} 
                type="text" />

                <input name="email" 
                value={email} 
                onChange={handleChange} 
                type="email" />
                
                <input name="password" 
                value={password} 
                onChange={handleChange} 
                type="password" />

                <button type="submit"> 
                    Enviar 
                </button>
            </form>
        </div>
    )
}

export default Form
