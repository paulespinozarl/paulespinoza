import 'animate.css';
import { InView } from 'react-intersection-observer';

import AnimationComponent from '../components/AnimationComponent';
import { rollet, iupsm } from '../../public';
import { Summary } from '../components/Summary';
import { Text } from '../components/Text';
import { Learnig } from '../components/Learnig';

export const Portafolio = () => {

  const descriptionOne = `Programador Jr. en Rolleet, enfocado en optimización y refactorización de código.`
  const descriptionTwo = 'Estudiante de Ing. En Sistemas - IUPSM. Mérida, Venezuela 2014 - 2017.'
  return (
      <>
        <Summary/>
        <Text
          title='Desarrollador de Software'
          subtitle='Empleo'
        />

        <br />            
                         
        <div className='flex justify-center flex-col max-w-xd mx-auto'>
          {InView && <AnimationComponent
          image={ rollet }
          alt='rolleet'
          title='Rolleet'
          description={ descriptionOne }
          url='https://rolleet.app/'
          />}
        </div>

        <Text
          title='Desarrollador de Software'
          subtitle='Educación'
        />

        <br />            
                         
        <div className='flex justify-center flex-col max-w-xd mx-auto'>
          {InView && <AnimationComponent
          image={ iupsm }
          alt='rolleet'
          title='IUPSM'
          description={ descriptionTwo }
          url='https://www.udemy.com/'
          />}
        </div>

        <Text
          title='Desarrollador de Software'
          subtitle='Aprendizaje'
          text='En curso'
        />

        <Learnig/>
      </>
    );
  };
