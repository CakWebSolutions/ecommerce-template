/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row justify-between bg-[#ffffff] p-8 '>
            <div>
                <h1 className='pl-16'>ArtsyPatsy</h1>
            </div>
            <div className='flex flex-row space-x-6 items-center'>
                <h1>Paintings</h1>
                <h1>Drawings</h1>
                <h1>Sculpture</h1>
                <h1>Artists</h1>
                <img className='h-4 w-4' src='/cart.png' alt='cart'></img>
                <img className='h-4 w-4' src='/search.png' alt='search'></img>
            </div>
        </div>
    )
}

export default Navbar