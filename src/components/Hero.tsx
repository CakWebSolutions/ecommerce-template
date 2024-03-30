import React from 'react';
import Artwork from './Artwork';
import ArtistProfile from './ArtistProfile';
import Navbar from './Navbar';

function Hero() {
    return (

        <div className='flex flex-col justify-center space-y-14 w-screen'>
            <Navbar />
            <section className='flex flex-row items-center space-y-10 justify-between w-full p-8'>
                <h1 className='text-6xl'>Featured Paintings</h1>
                <img className='h-12 w-12' src='/arrow.png' alt='Next' />
            </section>

            <section className='flex flex-row justify-start space-x-24 items-center px-24 overflow-x-auto'>
                <Artwork imageSrc='/art.png' title='Wallowing Breeze' artist='Shqet DiCaprio' details='Oil on Canvas, 2008' />
                <Artwork imageSrc='/art2.png' title='Wallowing Breeze' artist='Shqet DiCaprio' details='Oil on Canvas, 2008' />
                <Artwork imageSrc='/art3.png' title='Wallowing Breeze' artist='Shqet DiCaprio' details='Oil on Canvas, 2008' />
                <Artwork imageSrc='/art4.png' title='Wallowing Breeze' artist='Shqet DiCaprio' details='Oil on Canvas, 2008' />
                {/* Repeat for other artworks */}
            </section>

            <section className='flex flex-col py-10 space-y-10 px-24 bg-[#979797]'>
                <h1>Featured Artists</h1>
                <div className='flex flex-row items-center justify-evenly'>
                    <ArtistProfile imageSrc='/artist.png' name='Mike Lambert' location='Painter, Texas' />
                    <ArtistProfile imageSrc='/artist2.png' name='Mike Lambert' location='Painter, Texas' />
                    <ArtistProfile imageSrc='/artist33.png' name='Mike Lambert' location='Painter, Texas' />
                    {/* Repeat for other artists */}
                </div>
            </section>
        </div>
    );
}

export default Hero;
