import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className='bg-[#DEBDA6] fixed top-0 right-0 left-0'>
            <div className='container max-w-7xl mx-auto py-4'>
                <Link to="/">
                    <h1 className='text-4xl'>Not Defteri</h1>
                </Link>
            </div>
        </header>
    )
}
