import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import Cv from '../assets/Akhator_Osakhogba.pdf';
import { FaAngleDoubleDown } from "react-icons/fa";

const Sidebar = () => {
  return (

       <div className='flex fixed w-full flex-col bottom-0 md:top-[35%] justify-center items-center md:justify-normal md:items-start md:left-0 z-50 font-extralight text-xs text-white bg-[#003816]'>
        <ul className="flex md:flex-col">
          <li className='side-link hidden md:w-[150px] h-[60px] md:flex items-center underline px-5 md:px-5 md:pl-2'>
              My Info <FaAngleDoubleDown />
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-green-700'>
            <a href={Cv} className='w-full flex justify-between items-center'><span className="hidden md:flex">Resume</span>
               <BsFillPersonLinesFill className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-blue-900'>
            <a href="https://www.linkedin.com/in/akhator-osakhogba-024762139" className='w-full flex justify-between items-center'><span className="hidden md:flex">LinkedIn</span><FaLinkedin className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-black'>
            <a href="https://www.github.com/Akhatorenosa" className='w-full flex justify-between items-center'><span className="hidden md:flex">GitHub</span><FaGithub className="text-2xl md:text-3xl"/>
            </a>
          </li>
          <li className='side-link md:w-[150px] h-[60px] flex items-center px-5 md:px-5 md:-translate-x-20 hover:-translate-x-0 duration-300 bg-red-600'>
            <a href="mailto:aosakhogba@gmail.com" className='w-full flex justify-between items-center'><span className="hidden md:flex">Email</span><HiOutlineMail className="text-2xl md:text-3xl"/>
            </a>
          </li>
        </ul>
       </div>
  )
}

export default Sidebar