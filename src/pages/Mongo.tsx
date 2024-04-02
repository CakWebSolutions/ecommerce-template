/* eslint-disable @next/next/no-img-element */

import "@/styles/globals.css";
import { useRouter } from 'next/router'; // Correct import for Next.js
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

interface DataItem {
    _id: string;
    name: string;
    index: number;
    path_to_src: string;
    costs: string;
    description: string;
}


function Mongo() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [dataItems, setDataItems] = useState<DataItem[]>([]);
    const router = useRouter();

    const currentItem = dataItems[currentIndex];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/SampleData");
                if (!res.ok) throw new Error("Data could not be fetched");
                const data: DataItem[] = await res.json();
                setDataItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const openCard = () => {
        if (currentItem) {
            router.push(`/Cart?paintingId=${currentItem._id}&name=${encodeURIComponent(currentItem.name)}&imageSrc=${encodeURIComponent(currentItem.path_to_src)}`);
        }
    };


    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <div className='flex pl-16'>
                <div className="relative max-w-lg mx-auto overflow-hidden">
                    {currentItem && (
                        <div onClick={openCard} className="flex flex-col justify-center items-center">
                            <img
                                src={currentItem.path_to_src}
                                alt={currentItem.name}
                                className="w-[195px] h-[244px] sm:w-[250px] sm:h-[300px]"
                            />
                            <h1>{currentItem.name}</h1>
                            {/* Display other details as needed */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mongo