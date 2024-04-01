import React from 'react';

interface ArtistProfileProps {
    imageSrc: string;
    name: string;
    location: string;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ imageSrc, name, location }) => {
    return (
        <div className='flex flex-row space-x-3 items-center'>
            <img className='w-16 h-16' src={imageSrc} alt={`${name} profile`} />
            <div className='flex flex-col pl-5 border-2 w-[160px] items-start justify-center border-gray-500'>
                <h2 className='text-lg'>{name}</h2>
                <h2 className='text-sm opacity-70'>{location}</h2>
            </div>
        </div>
    );
};

export default ArtistProfile;
