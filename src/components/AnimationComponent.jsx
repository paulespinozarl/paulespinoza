import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const AnimationComponentLeft = ({image, alt, title, url, description}) => {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);

  return (
    <div ref={ref} className={`p-2 flex max-w-xd mx-auto rounded-xl justify-center mr-2 ml-2
    ${
      isVisible
          ? 'animate__animated animate__fadeInDown'
          : 'opacity-0'
    }`}>
        <div className='grid grid-cols-1 gap-6'>
            <div className='bg-gray-800 p-2 rounded-xl shadow-md shadow-gray-600 flex justify-center items-center'>
                <a href={ url } target="_blank">
                    <img className="lg:w-xxxl w-40 max-h-32 lg:max-h-44 rounded-xl object-cover" 
                    src={ image } 
                    alt={ alt } />
                </a>
                <div className='flex justify-center items-center flex-col'>
                <span className='m-2 md:m-5 text-gray-200 font-medium text-xl md:text-2xl '>{ title }</span>    
                <span className='m-2 md:m-5 text-gray-200 font-medium text-xs md:text-xs lg:w-72 w-40'>{ description }</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AnimationComponentLeft;
