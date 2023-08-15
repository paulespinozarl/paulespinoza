import { FaLinkedin, FaGithub, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { tailwind, unidebikesLogo, kenitosBurger, aldaReposteria } from '../../public'

export const Informacion = () => {
      
    return (
        <>
          <div className='m-5'>
            <div className="shadow-lg shadow-gray-700 flex max-w-6xl mx-auto bg-gray-800 rounded-xl">
              <div className="w-2/4 p-2 rounded-2xl m-2">
                <h1 className="text-3xl text-white p-2">Hola, soy Paul</h1>
                <p className="text-xl p-3 text-gray-50">Radicado en Argentina con experiencia en el desarrollo de aplicaciones en JavaScript y React con bibliotecas UI.</p>
                <p className='text-white text-lg font-semibold p-2'> Contacto </p>
                <p className='text-gray-400 underline ml-3'>paulespinozarl@gmail.com <br />
                cel: +54 11 30085 208</p>
                <div className="flex flex-row gap-4 justify-start">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-5 mt-6 transition-transform duration-200 hover:scale-125">
                      <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-5 mt-6 transition-transform duration-200 hover:scale-125">
                      <FaGithub size={30} />
                    </a>
                    
                </div>
              </div>
              <div className='w-2/4 m-2 p-2'>
                  <h1 className="text-3xl text-white p-2">Habilidades</h1>
                  <div className='grid grid-cols-2 sm:grid-cols-3 items-center justify-center p-4'>
                    <FaJsSquare className='transition-transform duration-200 hover:scale-125 m-3' color='#F7DF1E' size={45}/>
                    <FaReact className='transition-transform duration-200 hover:scale-125 m-3' color='#61DAFB' size={45}/>
                    <BsGit className='transition-transform duration-200 hover:scale-125 m-3' color='#F05032' size={45}/>
                    <AiOutlineHtml5 className='transition-transform duration-200 hover:scale-125 m-3' color='#E34F26' size={45}/>
                    <BiLogoCss3 className='transition-transform duration-200 hover:scale-125 m-3' color='#1572B6' size={45}/> 
                    <FaBootstrap className='transition-transform duration-200 hover:scale-125 m-3' color='#7952B3' size={45}/>
                    <img className='transition-transform duration-200 hover:scale-125' style={{ width: '45px', height: '45px', color: 'white', margin: '12px'}} src={ tailwind } alt="tailwind" />
                  </div>
              </div>
            </div>
          </div>

          <div className='m-5'>
            <div className="max-w-6xl mx-auto flex flex-wrap mt-10 mb-10 md:p-3 lg:p-0 relative">
              <div className="absolute top-0 lg:top-5 md:left-5 left-0 lg:left-5 h-32 ">
                <h1 className='text-3xl sm:text-6xl md:text-7xl  font-bold dark:text-slate-500/30 text-slate-700/20'>Professional Development</h1>
              </div>
              <div className="w-full lg:w-1/2  p-5 lg:border-l-4 border-slate-700 relative md:pl-9 pl-0 ">
                <h1 className=" text-3xl md:text-5xl font-bold text-white ">My work's</h1>
                <p className=" text-xl dark:text-slate-500 text-slate-500">Timeline illustrating my progress and growth in learning.</p>
              </div>
            </div>
          </div>
          <br />
            
          <div className='m-5'>
            <div className="p-2 shadow-lg shadow-gray-700 flex max-w-6xl mx-auto bg-gray-800 rounded-xl">
                <div className='grid grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 gap-2 items-center justify-center'>
                    <a href="https://www.instagram.com/kenitos.gourmet/?hl=es-la" target="_blank"><img className='rounded-xl hover:opacity-50 hover:scale-105 transition-all duration-500' src={ kenitosBurger } alt="kenitos" /></a>
                    <a href="https://paulespinozarl.github.io/undiebikes/home/home.html" target="_blank"><img className='rounded-xl' src={ unidebikesLogo } alt="undiebikes" /></a>
                    <a href="https://www.instagram.com/aldasreposteria/?hl=es-la" target="_blank"><img className='rounded-xl' src={ aldaReposteria } alt="otros" /></a>
                </div>
            </div>
          </div>
        </>
      );
    };
