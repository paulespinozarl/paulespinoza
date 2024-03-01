import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { cvpaul } from "../../public/index";

const SideBar = ({ handleLinkClick }) => {
  return (
    <div
      onClick={handleLinkClick}
      className=" m-10 flex justify-around text-gray-900"
    >
      <a
        href="https://www.linkedin.com/in/paulespinozarl/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-125 mr-5"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/paulespinozarl"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-125 mr-5"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={cvpaul}
        download="cv-02-24.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-125"
      >
        <IoDownloadOutline size={30} />
      </a>
    </div>
  );
};

export default SideBar;
