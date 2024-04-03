/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../Navbar';
import "@/styles/globals.css";
import { useRouter } from 'next/router';

function Cart() {
    const router = useRouter();
    const { costs, description, artist, name, imageSrc } = router.query;

    return (
        <div className='flex flex-col justify-center h-screen bg-white'>
            <Navbar />
            <div className='flex flex-row items-center justify-evenly'>

                <div className='flex flex-col items-center justify-center space-y-8 bg-[#979797] h-screen w-screen'>
                    <img className='h-46' src={decodeURIComponent(imageSrc as string)} alt={decodeURIComponent(name as string)} />
                    <div className='flex flex-row w-full items-center justify-evenly'>
                        <button>👁️👁️View in a room</button>
                        <button>⬆️Share</button>
                    </div>
                </div>



                <div className='flex flex-col items-center justify-center h-screen w-screen'>
                    <div>
                        <h1>{decodeURIComponent(name as string)}</h1>
                        <p>Artist: {decodeURIComponent(artist as string)}</p>
                        <p>Description: {decodeURIComponent(description as string)}</p>
                        <p>Cost: {decodeURIComponent(costs as string)}</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Cart;
