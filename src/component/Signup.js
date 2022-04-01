import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_CREATE } from '../apollo/mutation';
import { useNavigate } from 'react-router-dom';

const SignupUser = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
    age: '',
  });

  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * ! Apollo Cllient
   */
  const [UserCreate] = useMutation(USER_CREATE, {
    onError: (err) => {
      console.log(err.message);
      alert(err.message);
    },
    onCompleted: ({ userCreate }) => {
      if (userCreate?.status === 201) {
        // console.log(userCreate.message);
        alert(userCreate.message);
        // login page
        navigate('/login');
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    UserCreate({
      variables: {
        input: {
          name: signUp.name,
          email: signUp.email,
          password: signUp.password,
          confirmPassword: signUp.confirmPassword,
          phone: signUp.phone,
          gender: signUp.gender,
          age: parseInt(signUp.age),
        },
      },
    });
  };
  return (
    <div className='container my-container'>
      <h5 className='login'>Signup!</h5>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder=' Name' name='name' onChange={handleChange} value={signUp.name} required />
        <input type='email' placeholder='email' name='email' onChange={handleChange} value={signUp.email} required />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
          value={signUp.password}
          required
        />

        <input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          onChange={handleChange}
          value={signUp.confirmPassword}
          required
        />
        <input
          type='text'
          placeholder='Mobile Number'
          name='phone'
          onChange={handleChange}
          value={signUp.phone}
          required
        />
        {/* <input type='text' placeholder='Gender' name='gender'   required /> */}
        <input type='Number' placeholder='Age' name='age' value={signUp.age} onChange={handleChange} />

        {/* <label for='cars'>Choose a car:</label> */}
        <div className='input-field col s12'>
          <select className='browser-default' value={signUp.gender} name='gender' onChange={handleChange}>
            <option>Choose your Gender</option>
            <option value='MALE'>Male</option>
            <option value='FEMALE'>Female</option>
            <option value='OTHER'>Others</option>
          </select>
        </div>
      </form>

      <p>
        Already Have an account ?<Link to='/'> Register</Link>
      </p>
      <button className='btn waves-effect waves-light' type='submit' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SignupUser;
