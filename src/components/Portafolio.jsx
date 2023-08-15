import { FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { BsGit, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiLogoCss3, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';
import { tailwind, unidebikesLogo, capAldas } from '../../public'
import 'animate.css';

export const Portafolio = () => {
      
    return (
        <>
          <div className='m-5'>
            <div className="contenedor">
              <div className="w-2/4 p-2 rounded-2xl m-2">
                <h1 className="text-2xl md:text-3xl text-white p-2 font-semibold w-72 lg:w-full">Hola, soy Paul</h1>
                <p className=" text-md lg:text-xl p-3 text-gray-50 w-80 lg:w-full">Radicado en Argentina con experiencia en el desarrollo de aplicaciones en JavaScript y React con bibliotecas UI.</p>
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
                    <FaBootstrap className='iconsStyle' color='#7952B3' size={45}/>
                    <img className='iconsStyle' style={{ width: '45px', height: '45px', color: 'white'}} src={ tailwind } alt="tailwind" />
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
                <p className=" text-md lg:text-xl dark:text-slate-500 text-slate-500">Línea de tiempo con mis proyectos</p>
              </div>
            </div>
          </div>

          <br />
            
          <div>
            <div className="p-2 flex max-w-6xl mx-auto rounded-xl justify-center">
                <div className='grid grid-cols-1 gap-6'>
                    <div className='bg-gray-800 p-2 rounded-xl flex shadow-md shadow-gray-600'>
                      <a href="#" target="_blank">
                          <img className='lg:w-full w-72 rounded-xl animate__animated animate__fadeInLeft' src={ unidebikesLogo } alt="otros" />
                      </a>
                      <span className='flex justify-center items-center m-2 md:m-5 text-gray-200 font-medium text-sm md:text-lg'>Sitio web de Undiebikes</span>
                    </div>
                    <div className='bg-gray-800 p-2 rounded-xl flex shadow-md shadow-gray-600'>
                      <a href="https://aldas-reposteria.vercel.app/" target="_blank">
                          <img className='lg:w-full w-72 rounded-xl animate__animated animate__fadeInRight' src={ capAldas } alt="otros" />
                      </a>
                      <span className='flex justify-center items-center m-2 md:m-5 text-gray-200 font-medium text-sm md:text-lg'>Sitio web de Aldas Repostería</span>
                    </div>
                </div>
            </div>
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
            <FaReact className='animate__animated animate__fadeInLeft' size={60}/> <p>React Native</p>
            <BiLogoNodejs className='animate__animated animate__fadeInRight' size={60}/> <p>Node Js</p>
            <BiLogoMongodb className='animate__animated animate__fadeInLeft' size={60}/> <p>Mongo DB</p>
          </section>
        </>
      );
    };
