/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from './Navbar'
import "@/styles/globals.css";
import { useRouter } from 'next/router';

function Cart() {
    const router = useRouter();
    const { paintingId, name, imageSrc } = router.query;

    return (
        <div className='flex flex-col h-full items-center'>
            <Navbar />
            <div className='pl-16 w-[400px] space-y-8'>
                <h1>Painting Details: {name}</h1>
                <h1>{encodeURIComponent(paintingId as string)}</h1>
                <img src={decodeURIComponent(imageSrc as string)} alt={name as string} />

            </div>
        </div>
    );
}

export default Cart;
