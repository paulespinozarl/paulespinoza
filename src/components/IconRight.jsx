import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const IconRight = ({icon, description}) => {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.8,
    });

    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);

  return (
    <div ref={ref} className={`${
        isVisible
            ? 'animate__animated animate__fadeInRight flex flex-col justify-center items-center'
            : 'opacity-0'
      }`} >
        { icon }
        <p>{ description }</p>
    </div>
  );
};

export default IconRight;
