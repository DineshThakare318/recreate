import Link from 'next/link'
import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (

        <div className='navbar-container'>
            <nav >
                <div className='navbar-container-inside'>
                    <Link className='eachnav' href="/">Home</Link>
                    <Link className='eachnav' href="/Contact">Contact</Link>
                    <Link className='eachnav' href="/About">About</Link>
                    <Link className='eachnav' href="/Dinesh">Products</Link>

                </div>
            </nav>
        </div>
    )
}
