import "animate.css";
import { InView } from "react-intersection-observer";

import AnimationComponent from "../components/AnimationComponent";
import { rollet, iupsm2, logo_pico, udemy } from "../../public";
import { Summary } from "../components/Summary";
import { Text } from "../components/Text";

export const Portafolio = () => {
  return (
    <div className="bg-slate-100">
      <Summary />
      <Text
        title="Experiencia"
        subtitle="Empleo"
        text="Desarrollador de Software & Web"
      />

      <br />

      <div className="flex justify-center flex-col max-w-xd mx-auto">
        {InView && (
          <AnimationComponent
            image={rollet}
            title="Rolleet"
            subtitle={"01/23 - 12/23"}
            description="Diversas funciones en la App mobile desarrollada con React Native y en el BackOffice con NextJs."
            url="https://www.instagram.com/rolleetapp/"
            web="Web"
            animationDirection="right"
            isFirst={true}
          />
        )}
      </div>

      <div className="flex justify-center flex-col max-w-xd mx-auto">
        {InView && (
          <AnimationComponent
            image={logo_pico}
            title="Nawara"
            subtitle={"01/24 - Actualidad"}
            description="Sitio web. Desarrollado con React & Typescript. Utilizando Tailwind
                   como libreria de diseño y trabajando con animaciones de Animate.css
                   y Motion. Respetando las mejores practicas y diseño responsive"
            url="https://nawara.app/"
            web="Web"
            animationDirection="left"
          />
        )}
      </div>

      <Text title="Desarrollador de Software" subtitle="Educación" />

      <br />

      <div className="flex justify-center flex-col max-w-xd mx-auto">
        {InView && (
          <AnimationComponent
            image={iupsm2}
            title="Santiago Mariño"
            subtitle="Ing. en Sistemas"
            description="Mérida, Venezuela 2014 - 2017."
            animationDirection="right"
            isFirst={true}
          />
        )}
      </div>
      <div className="flex justify-center flex-col max-w-xd mx-auto">
        {InView && (
          <AnimationComponent
            image={udemy}
            title="Udemy"
            subtitle="Cursos"
            description="React Js, React Native, Node Js"
            animationDirection="left"
          />
        )}
      </div>
    </div>
  );
};
