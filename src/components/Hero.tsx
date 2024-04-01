/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../pages/Navbar";

function Hero2() {

    const boxShadow = {
        boxShadow: '5px 21px 15px 5px #000000',
    };

    return (
        <div className="">
            <div className='flex flex-row sm:flex-col justify-between bg-white h-screen'>
                <div className='flex flex-col z-50 text-center text-black items-center mt-10 space-y-2'>
                    <h1 className='text-6xl opacity-60 font-bold'>Joan</h1>
                    <h1 className='text-6xl opacity-60 font-bold'>Popli`s</h1>
                    <h1 className='text-7xl opacity-60'>Gallery</h1>
                    <div>
                        <button className='bg-[#c4bfbf] transition-opacity duration-300 rounded-2xl p-1 px-3 opacity-60 hover:opacity-100 mt-8'>Get in Contact</button>
                    </div>
                </div>

                <div className='flex flex-row w-screen pl-16 overflow-hidden space-x-4 items-end -mt-56 relative' style={{ zIndex: 10 }}>
                    {['/pic1.png', '/pic2.png', '/pic3.png', '/pic4.png'].map((pic, i) => (
                        <div key={i} className="group max-h-[85vh] relative w-auto  hover:opacity-100 flex items-end">
                            <img src={pic} alt='paintings' className={`max-h-full ${boxShadow}`} />
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
