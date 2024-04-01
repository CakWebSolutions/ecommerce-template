import React from 'react';

interface ArtworkProps {
    imageSrc: string;
    title: string;
    artist: string;
    details: string;
}

const Artwork: React.FC<ArtworkProps> = ({ imageSrc, title, artist, details }) => {
    return (
        <div className='flex flex-col space-y-2'>
            <img src={imageSrc} alt={`${title} by ${artist}`} />
            <h2 className='pt-2 pb-2 text-xl'>{title}</h2>
            <h2 className='text-base font-semibold opacity-80'>{artist}</h2>
            <h2 className='opacity-75 italic'>{details}</h2>
        </div>
    );
};

export default Artwork;
