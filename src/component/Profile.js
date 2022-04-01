import { useQuery } from '@apollo/client';
import { USERS } from '../apollo/queries';
import React from 'react';

export default function Profile() {
    const { loading, error, data } = useQuery(USERS);

    if (loading) return <h1>Loading!</h1>;
    if (error) return <h1>{error.message}</h1>
    // console.log(data.users.payload, "data factibganjsbnds?>>>>>>>>>>>>>>>>> ")

    const payload = data.users.payload;
    console.log(payload, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    return (
        <div className='container my-container'>
            {payload.map((users, index) => {
                return (
                    <div key={index} style={{
                        width: "100px"
                    }}>
                        <img
                            className='circle'
                            style={{ border: '2px solid #000', marginTop: '50px', width: '100px' }}
                            src='https://res.cloudinary.com/cataxvira/image/upload/v1648463987/report%20images/taxmap/user_iw1r9d.png'
                            alt='pic'
                        />
                        <blockquote >
                            <h5 >{users.name}</h5>
                            <h5>{users.email}</h5>
                            <h6>{users.gender}</h6>
                            <p>{users.age}</p>
                        </blockquote>

                    </div>
                );
            })}
        </div>
    );
}
