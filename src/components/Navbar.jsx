import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {

  return (
    <nav className='flex p-5 text-gray-200'>
      <div className='text-xl font-bold max-w-4xl mx-auto flex items-center'>
        <span>Paul Espinoza</span>
      </div>
      <div className='text-xl font-bold max-w-4xl mx-auto flex items-center'>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125 mr-2">
          <FaLinkedin className='mr-2' />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125">
          <FaGithub />
        </a> 
      </div>
    </nav>
  );
};