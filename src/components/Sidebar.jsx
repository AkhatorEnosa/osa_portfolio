import { BsEnvelopePaper } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import Cv from '../assets/osakhogba.pdf';
import { FaAngleDoubleDown, FaGlobe } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Sidebar = () => {
  return (
       
       <div className='side-bar flex fixed w-full md:w-fit flex-col bottom-0 md:top-[20%] justify-center items-center md:justify-normal md:items-start md:left-0 z-50 font-semibold text-xs text-white bg-[#003816] bg-transparent'>
        <ul className="flex md:flex-col">
          <li className='side-link hidden w-fit lg:w-[150px] h-[60px] md:flex items-center underline px-5 md:px-5 md:pl-2'>
              Get In Touch <FaAngleDoubleDown />
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-green-700 z-50  rounded-tr-lg'>
            <a href={Cv} target="_blank" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">Resume</span>
               {/* <BsFillPersonLinesFill /> */}
               <BsEnvelopePaper className="text-2xl lg:text-3xl"/>
            </a>
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-black z-50'>
            <a href="https://x.com/dev_rocksta" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">X</span><FaXTwitter className="text-2xl lg:text-3xl"/>
            </a>
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-blue-900 z-50'>
            <a href="https://www.linkedin.com/in/osakhogba-akhator-024762139/" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">LinkedIn</span><FaLinkedin className="text-2xl lg:text-3xl"/>
            </a>
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-black z-50'>
            <a href="https://www.github.com/Akhatorenosa" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">GitHub</span><FaGithub className="text-2xl lg:text-3xl"/>
            </a>
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-[#1EB854] z-50'>
            <a href="https://soozeer.netlify.app/#/aefea77c-748a-4850-bc28-5bc45f74a7ce" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">Soozeer</span><FaGlobe className="text-2xl lg:text-3xl"/>
            </a>
          </li>
          <li className='side-link w-fit lg:w-[150px] h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:rounded-r-lg duration-300 bg-red-600 z-50 rounded-br-lg'>
            <a href="mailto:aosakhogba@gmail.com" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">Email</span><MdOutlineAlternateEmail className="text-2xl lg:text-3xl"/>
            </a>
          </li>
        </ul>
       </div>
  )
}

export default Sidebar
