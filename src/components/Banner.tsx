import React from 'react';

const Banner = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-between lg:flex-row lg:items-start">
      <div data-aos="fade-left" className="flex-auto lg:w-1/2">
        <h1 className="mb-6 text-center text-4xl font-bold leading-tight lg:text-left lg:text-6xl">
          TechTrek X
        </h1>
        <p className="mb-8 text-center text-lg text-gray-800 lg:text-left lg:text-xl">
          Experience the pinnacle of mobile technology with the Zenith Ultra X.
          Combining sleek design, unparalleled performance, and cutting-edge
          features, this device is crafted for those who demand excellence.
          Embrace the future with a smartphone that sets new standards in
          innovation and style.
        </p>
        <a
          className="sm:m-auto sm:block sm:text-center lg:m-0 lg:inline"
          href="#form"
        >
          <button className="mt-6 rounded-full border border-transparent bg-black px-8 py-3 text-white hover:bg-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500">
            Buy now
          </button>
        </a>
      </div>
      <img
        data-aos="fade-left"
        className="mt-8 w-full flex-1 rounded-lg lg:mt-0 lg:w-2/3"
        src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png"
        alt="Zenith Ultra X"
      />
    </div>
  );
};

export default Banner;
