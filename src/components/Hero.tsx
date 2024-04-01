/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../pages/Navbar";

function Hero2() {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className='flex flex-col justify-between bg-white h-screen'>
                <div className='flex flex-col z-50 text-center text-black items-center mt-10 space-y-2'>
                    <h1 className='text-6xl opacity-60 font-bold'>Joan</h1>
                    <h1 className='text-6xl opacity-60 font-bold'>Popli`s</h1>
                    <h1 className='text-7xl opacity-60'>Gallery</h1>
                    <div>
                        <button className='bg-[#c4bfbf] transition-opacity  duration-300 rounded-2xl p-1 px-3 opacity-60 hover:opacity-100 mt-8'>Get in Contact</button>
                    </div>
                </div>

                <div className='flex flex-row w-screen overflow-hidden pl-16 space-x-4 items-end -mt-32 relative' style={{ zIndex: 0 }}>
                    {['/pic1.png', '/pic2.png', '/pic3.png', '/pic4.png'].map((pic, i) => (
                        <div key={i} className="group max-h-[75vh] relative w-auto shadow-xl  flex items-end">
                            <img src={pic} alt='paintings' className="max-h-full" />
                            {/* Adjust opacity on hover within the group */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white group-hover:opacity-0 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero2;
