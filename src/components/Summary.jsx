import { HoverComp } from "./HoverComp";
import { contact, skills } from "../utils/data";

export const Summary = () => {
  return (
    <div id="sobre-mi" className="mt-16 pt-2">
      <div className="mx-4 my-2">
        <div className="contenedor">
          <div className="w-2/4 p-2 rounded-2xl m-2">
            <h1 className="text-2xl md:text-3xl text-white p-2 font-semibold w-72 lg:w-full">
              Desarrollador Front-End
            </h1>
            <p className="text-lg lg:text-xl md:text-lg p-3 text-gray-50 w-80 sm:w-64 md:w-72 lg:w-96">
              Hola, soy Paul. Con experiencia en el desarrollo de aplicaciones y
              paginas web usando frameworks y bibliotecas UI.
            </p>
            <p className="text-white text-2xl md:text-3xl font-semibold p-2 mt-5">
              Contacto
            </p>
            <div className="flex gap-4 p-2">
              {contact.map((item, index) => (
                <a key={index} target="_blank" href={item.href}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-2/4 m-2 p-2">
            <h1 className="text-2xl md:text-3xl text-white p-2 font-semibold">
              Habilidades
            </h1>
            <div className="grid grid-cols-4 items-center justify-center w-72 lg:w-full">
              {skills.map((skill, index) => (
                <HoverComp key={index} text={skill.text} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
