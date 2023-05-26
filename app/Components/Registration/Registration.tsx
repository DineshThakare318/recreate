import React from 'react'
import "../components.css"
export default function Registration() {
    return (
        <div className='signupcontainer'>
            <h2>Register</h2>
            <input className="input-signup" type="text" placeholder='enter your first name' />
            <br />
            <input className="input-signup" type="text" placeholder='enter your last name' />
            <br />
            <input className="input-signup" type="text" placeholder='enter your email' />
            <br />
            <input className="input-signup" type="password" placeholder='enter password' />
            <br />
            <button className='btnr'>Register</button>

        </div>


    )
}
