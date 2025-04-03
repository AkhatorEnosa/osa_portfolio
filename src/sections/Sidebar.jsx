import { BsEnvelopePaper } from "react-icons/bs"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import Cv from '../assets/osakhogba.pdf';
import { FaGlobe } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";
import SideLink from "../components/SideLink";

const Sidebar = () => {
  return (
       
       <div className='side-bar flex fixed w-full md:w-fit md:h-fit bottom-0 md:top-[25%] justify-center items-center md:justify-normal md:items-start md:left-0 z-50 font-semibold text-xs text-white'>
        <ul className="flex md:flex-col">
          <SideLink 
            title={"Resume"}
            bgColor={"bg-green-700"}
            link={Cv}
            icon={<BsEnvelopePaper className="text-xl lg:text-2xl"/>}
            variant={"rounded-tl-lg md:rounded-tr-lg"}
          />
          <SideLink 
            title={"Twitter"}
            bgColor={"bg-black"}
            link={"https://x.com/dev_rocksta"}
            icon={<FaXTwitter className="text-xl lg:text-2xl"/>}
          />
          <SideLink
            title={"LinkedIn"}
            bgColor={"bg-blue-900"}
            link={"https://www.linkedin.com/in/osakhogba-akhator-024762139/"}
            icon={<FaLinkedin className="text-xl lg:text-2xl"/>}
          />
          <SideLink
            title={"GitHub"}
            bgColor={"bg-black"}
            link={"https://www.github.com/Akhatorenosa"}
            icon={<FaGithub className="text-xl lg:text-2xl"/>}
          />
          <SideLink
            title={"Soozeer"}
            bgColor={"bg-[#1EB854]"}
            link={"https://soozeer.netlify.app/#/aefea77c-748a-4850-bc28-5bc45f74a7ce"}
            icon={<FaGlobe className="text-xl lg:text-2xl"/>}
          />
          <SideLink
            title={"Email"}
            bgColor={"bg-red-600"}
            link={"mailto:aosakhogba@gmail.com"}
            icon={<MdOutlineAlternateEmail className="text-xl lg:text-2xl"/>}
            variant={"rounded-tr-lg md:rounded-br-lg"}
          />
        </ul>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='side-link hidden absolute rotate-90 w-32 left-5 top-[11rem] lg:flex  text-center items-center px-5 md:px-5 md:pl-2'>
            Get In Touch
        </motion.span>
       </div>
  )
}

export default Sidebar
