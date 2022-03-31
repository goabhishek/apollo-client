import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
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
            <h5 className='login'>Signup!</h5>
            <form onSubmit={handleSubmit} >
                <input type="text"
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleChange}
                    required />
                <input type="text"
                    placeholder='Last Name'
                    name='lastName'

                    onChange={handleChange}
                    required />
                <input type="email"
                    placeholder='email'
                    name='email'

                    onChange={handleChange}
                    required />
                <input type="password"
                    placeholder='password'
                    name='password'

                    onChange={handleChange}
                    required />
                <Link to="/"> <p>Already Have an account ?</p></Link>
                <button className='btn waves-effect waves-light' type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Signup
