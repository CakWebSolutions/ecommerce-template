/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../Navbar';
import "@/styles/globals.css";
import { useRouter } from 'next/router';
import Link from 'next/link';

function Card() {
    const router = useRouter();
    const { name, artist, description, costs, imageSrc } = router.query;

    return (
        <div className="flex lg:flex-row flex-col w-screen min-h-screen bg-white">
            <Navbar />
            <div className="lg:flex-1 lg:flex">
                <div className="lg:w-1/2 flex flex-col items-center justify-center bg-gray-100 p-4">
                    <img src={decodeURIComponent(imageSrc as string)} alt={decodeURIComponent(name as string)} className="max-h-[500px] object-contain my-4" />
                    <div className="flex flex-row w-full items-center justify-evenly cursor-pointer">
                        <Link legacyBehavior
                            href={{
                                pathname: '/prints/RoomView',
                                query: {
                                    name, // No need to decodeURIComponent here
                                    imageSrc,
                                    artist,
                                    description,
                                    costs,
                                }
                            }}>

                            <a className="space-x-2 lg:opacity-75 text-black hover:opacity-100 flex flex-row items-center">
                                <img className='w-8' alt='View in a room' src='/eye.png' />
                                <h1>View in a room</h1>
                            </a>
                        </Link>
                        <a className="space-x-2 lg:opacity-75 text-black hover:opacity-100 flex flex-row items-center">
                            <img className='w-8' alt='share' src='/sshare.png' />
                            <h1>Share</h1>
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center md:mt-20 lg:items-start items-center p-4 md:p-38 lg:p-16 text-black bg-white">
                    <Link legacyBehavior href="/Prints">
                        <a className="lg:absolute hidden lg:top-20 lg:flex flex-row items-center space-x-3 w-fit px-4 py-2 transition duration-200 rounded hover:bg-gray-100">
                            <img src='/arrow.png' className='w-5 rotate-180' alt='back'></img>
                            <h1>Back</h1>
                        </a>
                    </Link>
                    <div className='flex flex-col h-full justify-center p-2 w-full rounded-2xl lg:bg-white bg-gray-100'>
                        <Link legacyBehavior href="/Prints">
                            <a className="lg:absolute lg:top-20 lg:hidden  flex flex-row items-center space-x-3 w-fit px-4 py-2 transition duration-200 rounded hover:bg-gray-100">
                                <img src='/arrow.png' className='w-5 rotate-180' alt='back'></img>
                                <h1>Back</h1>
                            </a>
                        </Link>
                        <h1 className="text-3xl font-bold my-2">{decodeURIComponent(name as string)}</h1>
                        <h2 className="text-xl my-1">{decodeURIComponent(artist as string)}</h2>
                        <p className="my-2">{decodeURIComponent(description as string)}</p>
                        <hr className="my-4  border-gray-400" />
                        <p className="text-2xl lg:p-0 pb-4 font-bold my-2">{decodeURIComponent(costs as string)}</p>
                        <button className="py-2 bg-gray-800 self-center px-20 transition duration-200 text-white rounded hover:bg-gray-900">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;