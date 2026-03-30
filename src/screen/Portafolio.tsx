import 'animate.css';
import {InView} from 'react-intersection-observer';

import Animation from '../components/Animation';
import {rollet, iupsm2, logo_pico, udemy, footx, logo_cop} from '../../public';
import {Summary} from '../components/Summary';
import {Text} from '../components/Text';

export const Portafolio = () => {
  return (
    <div className="bg-slate-100">
      <Summary />
      <Text
        title="Experiencia"
        subtitle="Empleos"
        text="Desarrollador de Software"
        id={'experiencia'}
      />

      <br />

      {InView && (
        <Animation
          image={logo_cop}
          title="Centro Ortopédico Peláez"
          subtitle={'03/26 - Actualidad'}
          description="Desarrollador Full Stack.
            Planificación, desarrollo y mantenimiento de aplicaciones móviles con React Native 
            y aplicaciones web con React.js y Node.js.
            Integración y mantenimiento de soluciones en Salesforce."
          animationDirection="left"
          clase="card2"
        />
      )}

      {InView && (
        <Animation
          image={footx}
          title="Foot X"
          subtitle={'05/24 - 02/2026'}
          description="Diseño, desarrollo y mantenimiento de Aplicación móvil desarrollada
           con React Native, backend basado en Node.js y base de datos MySQL. Además, encargado
           del desarrollo y mantenimiento de distintas apps web de la empresa."
          animationDirection="right"
          clase="card"
        />
      )}

      {InView && (
        <Animation
          image={logo_pico}
          title="Nawara"
          subtitle={'01/24 - Actualidad'}
          description="Sitio web. Desarrollado con React & Typescript. Utilizando Tailwind
                   como libreria de diseño y trabajando con animaciones de Animate.css
                   y Motion. Respetando las mejores practicas y diseño responsive"
          animationDirection="left"
          clase="card2"
        />
      )}

      {InView && (
        <Animation
          image={rollet}
          title="Rolleet"
          subtitle={'01/23 - 12/23'}
          description="Diversas funciones en la App mobile desarrollada con React Native y en el BackOffice con NextJs."
          animationDirection="right"
          clase="card"
        />
      )}
      {/* 
      <Text
        id={'educacion'}
        title="Desarrollador de Software"
        subtitle="Educación"
      />

      <br />

      {InView && (
        <Animation
          image={udemy}
          title="Udemy"
          subtitle="Cursos"
          description="React Js, React Native, Node Js"
          animationDirection="right"
          clase="card2"
        />
      )}
      {InView && (
        <Animation
          image={iupsm2}
          title="Santiago Mariño"
          subtitle="Ing. en Sistemas"
          description="Mérida, Venezuela 2014 - 2017."
          animationDirection="left"
          clase="card"
        />
      )} */}
    </div>
  );
};
