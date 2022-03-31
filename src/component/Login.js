import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <div className='container my-container'>
            <h5 className='login'>Login!</h5>
            <form onSubmit={handleSubmit} >
                <input type="email"
                    placeholder='email'

                    onChange={handleChange}
                    required />
                <input type="password"
                    placeholder='Password'

                    onChange={handleChange}
                    required />
                <Link to="/Signup"> <p>Don't Have an account ?</p></Link>
                <button className='btn waves-effect waves-light' type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
