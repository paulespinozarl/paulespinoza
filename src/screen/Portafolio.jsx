import 'animate.css';
import { InView } from 'react-intersection-observer';

import AnimationComponent from '../components/AnimationComponent';
import { rollet, iupsm, logoNawara } from '../../public';
import { Summary } from '../components/Summary';
import { Text } from '../components/Text';
import { Learnig } from '../components/Learnig';

export const Portafolio = () => {

  const des1 = `Diversas funciones en la App mobile desarrollada con React Native y en el BackOffice con NextJs.`
  const des2 = `Ing. En Sistemas - Mérida, Venezuela 2014 - 2017.`
  const des3 = `Desarrollo de algunas secciones del sitio web`
  
  return (
      <>
        <Summary/>
        <Text
          title='Experiencia'
          subtitle='Empleo'
        />

        <br />            
                         
        <div className='flex justify-center flex-col max-w-xd mx-auto'>
          {InView && <AnimationComponent
          image={ rollet }
          alt='rolleet'
          title='Rolleet'
          description={ des1 }
          url='https://rolleet.app/'
          />}
        </div>
        
        <div className='flex justify-center flex-col max-w-xd mx-auto'>
          {InView && <AnimationComponent
          image={ logoNawara }
          alt='nawara'
          title='Nawara'
          description={ des3 }
          url='https://nawara.app/'
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
          alt='iupsm'
          title='Santiago Mariño'
          description={ des2 }
          url='https://www.udemy.com/'
          />}
        </div>

        <Text
          title='Aprendizaje'
          subtitle='Aprendizaje'
          text='En curso'
        />

        <Learnig/>
      </>
    );
  };
