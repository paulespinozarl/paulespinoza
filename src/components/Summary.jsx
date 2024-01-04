import { FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { BsGit, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BiLogoCss3 } from 'react-icons/bi';
import { TbBrandTypescript } from "react-icons/tb";
import { tailwind, styled, material } from '../../public';

export const Summary = () => {
  return (
    <>
        <div className='mx-4 my-2'>
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
                  <FaJsSquare className='iconsStyle' color='#F7DF1E' size={40}/>
                  <TbBrandTypescript className='iconsStyle' color='#1572B6' size={40}/>
                  <FaReact className='iconsStyle' color='#61DAFB' size={40}/>
                  <BsGit className='iconsStyle' color='#F05032' size={40}/>
                  <AiOutlineHtml5 className='iconsStyle' color='#E34F26' size={40}/>
                  <BiLogoCss3 className='iconsStyle' color='#1572B6' size={40}/> 
                  <img className='iconsStyle' style={{ width: '40px', height: '40px'}} src={ styled } alt="styled-comp" />
                  <FaBootstrap className='iconsStyle' color='#7952B3' size={40}/>
                  <img className='iconsStyle' style={{ width: '40px', height: '40px'}} src={ tailwind } alt="tailwind" />
                  <img className='iconsStyle' style={{ width: '40px', height: '40px'}} src={ material } alt="material" />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}
  