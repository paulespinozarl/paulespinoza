import React, {useEffect, useState} from 'react';
import 'animate.css';
import {useInView} from 'react-intersection-observer';
import Card from './Card';

type AnimationDirection = 'left' | 'right';

interface AnimationProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  animationDirection: AnimationDirection;
  clase: string;
}

const Animation: React.FC<AnimationProps> = ({
  image,
  title,
  subtitle,
  description,
  animationDirection,
  clase,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [direction, setDirection] =
    useState<AnimationDirection>(animationDirection);

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      setDirection(prevDirection =>
        prevDirection === 'right' ? 'left' : 'right',
      );
    }
  }, [inView, isVisible]);

  const animationClass = `animate__animated ${
    isVisible
      ? `animate__fadeIn${direction === 'right' ? 'Right' : 'Left'}`
      : 'opacity-0'
  }`;

  return (
    <div ref={ref} className={`py-0 sm:py-8 lg:py-10 ${animationClass}`}>
      <Card
        clase={clase}
        title={title}
        subtitle={subtitle}
        text={description}
        image={image}
      />
    </div>
  );
};

export default Animation;
