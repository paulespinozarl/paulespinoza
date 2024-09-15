import {FaJsSquare, FaReact, FaBootstrap} from 'react-icons/fa';
import {BsGit} from 'react-icons/bs';
import {PiWhatsappLogoThin} from 'react-icons/pi';
import {AiOutlineHtml5} from 'react-icons/ai';
import {CiMail} from 'react-icons/ci';
import {BiLogoCss3} from 'react-icons/bi';
import {TbBrandTypescript} from 'react-icons/tb';
import {SiTailwindcss} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {FaNodeJs} from 'react-icons/fa';
import {SiMui} from 'react-icons/si';
import {SiStyledcomponents} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';

export const skills = [
  {
    text: 'JavaScript',
    icon: <FaJsSquare className="iconsStyle" color="#F7DF1E" size={40} />,
  },
  {
    text: 'TypeScript',
    icon: (
      <TbBrandTypescript className="iconsStyle" color="#1572B6" size={40} />
    ),
  },
  {
    text: 'NextJs',
    icon: <TbBrandNextjs className="iconsStyle" color="#000" size={40} />,
  },
  {
    text: 'React Js & Native',
    icon: <FaReact className="iconsStyle" color="#61DAFB" size={40} />,
  },
  {
    text: 'Node Js',
    icon: <FaNodeJs className="iconsStyle" color="#339933" size={40} />,
  },
  {
    text: 'Git Hub',
    icon: <BsGit className="iconsStyle" color="#F05032" size={40} />,
  },
  {
    text: 'My SQL',
    icon: <GrMysql className="iconsStyle" color="#1580E3" size={40} />,
  },
  {
    text: 'Tailwind',
    icon: <SiTailwindcss className="iconsStyle" color="#1CBDCD" size={40} />,
  },
  {
    text: 'Bootstrap',
    icon: <FaBootstrap className="iconsStyle" color="#7952B3" size={40} />,
  },
  {
    text: 'Material UI',
    icon: <SiMui className="iconsStyle" color="#1580E3" size={40} />,
  },
  {
    text: 'Styled Components',
    icon: (
      <SiStyledcomponents className="iconsStyle" color="#FFCACA" size={40} />
    ),
  },
];

export const contact = [
  {
    href: 'mailto:paulespinozadev@gmail.com',
    icon: <CiMail size={40} />,
  },
  {
    href: 'https://wa.me/+541130085208',
    icon: <PiWhatsappLogoThin size={40} />,
  },
];
