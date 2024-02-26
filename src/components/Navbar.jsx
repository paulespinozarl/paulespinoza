import { useMediaQuery } from "@react-hook/media-query";
import { IoDownloadOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cvpaul } from "../../public/index";

export const Navbar = () => {
  const isShortScreen = useMediaQuery("(min-width: 700px)");

  return (
    <nav className="fixed top-0 w-screen h-16 flex text-gray-900 bg-slate-100 z-30 shadow-lg">
      <div className="text-xl md:text-2xl font-bold max-w-4xl mx-auto flex items-center mt-2">
        <span>Paul Espinoza</span>
      </div>
      <div className="text-xl font-bold max-w-4xl mx-auto flex items-center mt-2">
        <a
          href="https://www.linkedin.com/in/paulespinozarl/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-125 mr-5"
        >
          <FaLinkedin size={isShortScreen ? 28 : 23} />
        </a>
        <a
          href="https://github.com/paulespinozarl"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-125 mr-5"
        >
          <FaGithub size={isShortScreen ? 28 : 23} />
        </a>
        <a
          href={cvpaul}
          download="cv-02-24.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:scale-125"
        >
          <IoDownloadOutline size={isShortScreen ? 28 : 23} />
        </a>
      </div>
    </nav>
  );
};
