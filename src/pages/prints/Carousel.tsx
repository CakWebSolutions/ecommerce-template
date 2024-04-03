/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function RoomView() {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (router.isReady) {
      // Now router.query should be populated
      const src = router.query.imageSrc as string;
      console.log(src);
      setImageSrc(src);
    }
  }, [router.isReady, router.query.imageSrc]);

  return (
    <div className="flex flex-col items-center justify-center">
      {imageSrc && (
        <img
          src={decodeURIComponent(imageSrc)}
          alt="Artwork"
          className="w-[195px] h-[244px] md:ml-10 lg:ml-10 -mt-80 md:-mt-64 lg:-mt-44 sm:w-[250px] sm:h-[300px] shadow-custom2"
        />
      )}
    </div>
  );
}

export default RoomView;
