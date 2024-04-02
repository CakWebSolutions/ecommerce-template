/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../pages/Navbar";
import Link from "next/link";

function Hero2() {

    const boxShadow = {
        boxShadow: '5px 21px 15px 5px #000000',
    };

    return (
        <div className="">
            <div className='flex flex-col justify-between lg:justify-between bg-white h-screen'>
                <div className='flex flex-col z-50 text-center text-black items-center mt-16 md:mt-10 lg:mt-5 space-y-2'>
                    <h1 className='text-6xl font-playfairBold opacity-75 font-bold'>Joan</h1>
                    <h1 className='text-6xl font-playfairBold opacity-70 font-bold'>Popli`s</h1>
                    <h1 className='text-7xl font-playfairRegular opacity-60'>Gallery</h1>
                    <div className="group inline-block">
                        <Link legacyBehavior href='/AboutMe'>
                            <a>
                                <button className='bg-[#c4c0c0] transition-opacity duration-300 rounded-md p-1 px-8 opacity-100 lg:opacity-60 hover:opacity-100 mt-8 relative overflow-hidden'>
                                    Get in Contact
                                    <div className="hidden absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-bg-[#c4c0c0] group-hover:translate-x-full transition-transform duration-500"></div>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='lg:hidden overflow-y-hidden flex flex-col w-screen space-x-4 items-end -mt-56 relative' style={{ zIndex: 10 }}>
                    {['/pic4.png'].map((pic, i) => (
                        <div key={i} className="group max-h-screen pt-2 relative w-auto hover:opacity-100 flex items-end">
                            <img src={pic} alt='paintings' className={`max-h-full ${boxShadow}`} />
                            {/* Adjust opacity on hover within the group */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className='hidden lg:flex flex-col lg:flex-row w-screen pl-16 overflow-hidden space-x-4 items-end -mt-56 relative' style={{ zIndex: 10 }}>
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
