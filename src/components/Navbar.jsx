import { useMediaQuery } from '@react-hook/media-query';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {

  const isShortScreen = useMediaQuery('(min-width: 700px)');

  return (
    <nav className='flex p-5 text-gray-200'>
      <div className='text-2xl font-bold max-w-4xl mx-auto flex items-center mt-2'>
        <span>Paul Espinoza</span>
      </div>
      <div className='text-xl font-bold max-w-4xl mx-auto flex items-center mt-2'>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125 mr-5">
          <FaLinkedin size={isShortScreen ? 30 : 25}/>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125">
          <FaGithub size={isShortScreen ? 30 : 25}/>
        </a>
      </div>
    </nav>
  );
};