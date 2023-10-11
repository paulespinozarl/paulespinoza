import { FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { BsGit, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiLogoCss3, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';
import { tailwind, unidebikesLogo, capAldas, styled, material } from '../../public';
import 'animate.css';
import { InView } from 'react-intersection-observer';
import AnimationComponentLeft from './AnimationComponentLeft';
import AnimationComponentRight from './AnimationComponentRight';
import IconRight from './IconRight';
import IconLeft from './IconLeft';

export const Portafolio = () => {

    return (
        <>
          <div className='m-5'>
            <div className="contenedor">
              <div className="w-2/4 p-2 rounded-2xl m-2">
                <h1 className="text-2xl md:text-3xl text-white p-2 font-semibold w-72 lg:w-full">Hola, soy Paul</h1>
                <p className=" text-md lg:text-xl p-3 text-gray-50 w-80 lg:w-full">Radicado en Argentina con experiencia en el desarrollo de aplicaciones y paginas web usando JavaScript y React con bibliotecas UI.</p>
                <p className='text-white text-2xl md:text-3xl font-semibold p-2 mt-5'> Contacto </p>
                  <div className='flex mb-2 mt-2 ml-2'>
                    <a href='mailto:paulespinozarl@gmail.com' className="mr-5 transition-transform duration-200 hover:scale-125">
                      <MdOutlineMailOutline size={34}/></a>
                    <a href="https://wa.me/+541130085208" target="_blank" rel="noopener noreferrer" className="mr-5 transition-transform duration-200 hover:scale-125">
                      <BsWhatsapp size={30}/>
                    </a>
                  </div>
              </div>
              <div className='w-2/4 m-2 p-2'>
                  <h1 className="text-2xl md:text-3xl text-white p-2 font-semibold">Habilidades</h1>
                  <div className='grid grid-cols-3 items-center justify-center p-4 w-72 lg:w-full'>
                    <FaJsSquare className='iconsStyle' color='#F7DF1E' size={45}/>
                    <FaReact className='iconsStyle' color='#61DAFB' size={45}/>
                    <BsGit className='iconsStyle' color='#F05032' size={45}/>
                    <AiOutlineHtml5 className='iconsStyle' color='#E34F26' size={45}/>
                    <BiLogoCss3 className='iconsStyle' color='#1572B6' size={45}/> 
                    <img className='iconsStyle' style={{ width: '45px', height: '45px'}} src={ styled } alt="styled-comp" />
                    <FaBootstrap className='iconsStyle' color='#7952B3' size={45}/>
                    <img className='iconsStyle' style={{ width: '45px', height: '45px'}} src={ tailwind } alt="tailwind" />
                    <img className='iconsStyle' style={{ width: '45px', height: '45px'}} src={ material } alt="material" />
                  </div>
              </div>
            </div>
          </div>

          <div className='m-5'>
            <div className="max-w-6xl mx-auto flex flex-wrap mt-10 mb-10 md:p-3 lg:p-0 relative">
              <div className="absolute top-0 mt-5 lg:top-5 md:left-5 left-0 lg:left-5 h-32 ">
                <h1 className='text-3xl sm:text-6xl md:text-7xl  font-bold dark:text-slate-500/30 text-slate-700/20'>Desarrollador Web</h1>
              </div>
              <div className="w-full lg:w-1/2 mt-5 p-5 lg:border-l-4 border-slate-700 relative md:pl-9 pl-0 lg:mt-14">
                <h1 className=" text-3xl md:text-5xl font-bold text-white ">Proyectos</h1>
                <p className=" text-md lg:text-xl dark:text-slate-500 text-slate-500"></p>
              </div>
            </div>
          </div>

          <br />            
                           
            <div className='flex justify-center flex-col max-w-xd mx-auto'>
              {InView && <AnimationComponentLeft 
              image={ unidebikesLogo }
              alt='kenitos'
              description='Panadería Kenitos'
              url='https://www.instagram.com/kenitos.gourmet/'
              />}

              {InView && <AnimationComponentRight 
              image={ capAldas }
              alt='aldasReposteria'
              description='Aldas Repostería'
              url='https://aldas-reposteria.vercel.app/'
              />}
            </div>

          <div className='m-5'>
            <div className="max-w-6xl mx-auto flex flex-wrap mt-10 mb-10 md:p-3 lg:p-0 relative">
              <div className="absolute top-0 lg:top-5 md:left-5 left-0 lg:left-5 h-32 ">
                <h1 className='text-3xl sm:text-6xl md:text-7xl  font-bold dark:text-slate-500/10 text-slate-700/20'>Desarrollador de  Software</h1>
              </div>
              <div className="w-full lg:w-1/2  p-5 lg:border-l-4 border-slate-700 relative md:pl-9 pl-0 lg:mt-14">
                <h1 className=" text-3xl md:text-5xl font-bold text-white ">Aprendizaje</h1>
                <p className=" text-md lg:text-xl dark:text-slate-500 text-slate-500">En curso</p>
              </div>
            </div>
          </div>

          <section className='text-white flex justify-center items-center flex-col mb-10 mt-10'>
            <div> { InView && <IconLeft icon={ <FaReact size={60}/> } description={'React Native'}/>} </div>
            <div> { InView && <IconRight icon={ <BiLogoNodejs size={60}/> } description={'Node Js'}/>} </div>
            <div> { InView && <IconLeft icon={ <BiLogoMongodb size={60}/> } description={'Mongo DB'}/>} </div>
          </section>
        </>
      );
    };
