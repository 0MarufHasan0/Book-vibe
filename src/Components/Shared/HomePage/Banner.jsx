import React from 'react';
import bookImg from "../../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-6 md:my-10">
        
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 w-full">
          
          {/* Image */}
          <img
            src={bookImg}
            alt="Books"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-xl"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Books to freshen up <br className="hidden md:block" /> your bookshelf
            </h1>

            <p className="py-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-md mx-auto lg:mx-0">
              Discover amazing books that will refresh your mind and upgrade your collection.
            </p>

            <button className="btn btn-success px-6 md:px-8 text-white py-2 md:py-3 text-sm md:text-base mt-2">
              View The List
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;