import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 3000);
    return (
        <>
            <h1 className='mt-5 center'>
                404 | Page Not Found
            </h1>
        </>
    )
}
