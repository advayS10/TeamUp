import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://t3.ftcdn.net/jpg/04/28/40/40/360_F_428404007_dlbIe8jNte0Td6fzJ5NIVoLGcAP0drQ6.jpg',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/02/58/48/21/240_F_258482163_wmkHGJeGJ2b5mkdNjQV49tAUqQmBl5wX.jpg',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/61/10/36/240_F_761103664_GZrHGVzBSGpeCLLnwEjC73WKaOqwcze4.jpg',
    },

    {
      url: 'https://t3.ftcdn.net/jpg/08/03/33/28/240_F_803332880_gSNw7laOOD1nYGDWVXE6zf94CjKU4obL.jpg',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/78/53/02/240_F_778530226_irwH9FOzOdh3gyPWp4jDQXjudx9EjvtK.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [currentIndex]);

  return (
    <div className='h-[320px] md:h-[360px] lg:h-[480px] w-full m-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Carousel;