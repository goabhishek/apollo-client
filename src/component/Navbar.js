import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper #673ab7 deep-purple">

                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>

                </ul>
            </div>
        </nav>
    )
}