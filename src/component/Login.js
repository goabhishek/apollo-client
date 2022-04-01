import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../apollo/mutation';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * ! Apollo Cllient
   */
  const [UserLogin] = useMutation(USER_LOGIN, {
    onError: (err) => {
      console.log(err.message);
      alert(err.message);
    },
    onCompleted: (data) => {
      const { userLogin } = data;
      if (userLogin?.status === 200) {
        console.log(userLogin.message);
        alert(userLogin.message);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    UserLogin({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };
  return (
    <div className='container my-container'>
      <h5 className='login'>Login!</h5>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='email' onChange={handleChange} required name='email' value={formData?.email} />
        <input
          type='password'
          placeholder='Password'
          onChange={handleChange}
          required
          name='password'
          value={formData?.password}
        />
      </form>
      <p>
        Don't Have an account ?<Link to='/Signup'>Register</Link>
      </p>
      <button className='btn waves-effect waves-light' type='submit' onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginUser;
