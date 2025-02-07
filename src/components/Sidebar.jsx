import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import Cv from '../assets/osakhogba.pdf';
import { FaAngleDoubleDown, FaGlobe } from "react-icons/fa";

const Sidebar = () => {
  return (
       
       <div className='side-bar flex fixed w-full md:w-fit flex-col bottom-0 md:top-[20%] justify-center items-center md:justify-normal md:items-start md:left-0 z-50 font-extralight text-xs text-white bg-[#003816] bg-transparent'>
        <ul className="flex md:flex-col">
          <li className='side-link hidden md:w-[150px] h-[60px] md:flex items-center underline px-5 md:px-5 md:pl-2'>
              Contact Me <FaAngleDoubleDown />
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-green-700 z-50'>
            <a href={Cv} target="_blank" className='w-full flex justify-between items-center'><span className="hidden md:flex">Resume</span>
               <BsFillPersonLinesFill className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-black z-50'>
            <a href="https://x.com/dev_rocksta" className='w-full flex justify-between items-center'><span className="hidden md:flex">X</span><FaXTwitter className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-blue-900 z-50'>
            <a href="https://www.linkedin.com/in/osakhogba-akhator-024762139/" className='w-full flex justify-between items-center'><span className="hidden md:flex">LinkedIn</span><FaLinkedin className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-black z-50'>
            <a href="https://www.github.com/Akhatorenosa" className='w-full flex justify-between items-center'><span className="hidden md:flex">GitHub</span><FaGithub className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-[#1EB854] z-50'>
            <a href="https://soozeer.netlify.app/#/aefea77c-748a-4850-bc28-5bc45f74a7ce" className='w-full flex justify-between items-center'><span className="hidden md:flex">Soozeer</span><FaGlobe className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-red-600 z-50'>
            <a href="mailto:aosakhogba@gmail.com" className='w-full flex justify-between items-center'><span className="hidden md:flex">Email</span><HiOutlineMail className="text-2xl md:text-3xl"/>
            </a>
          </li>
        </ul>
       </div>
  )
}

export default Sidebar
