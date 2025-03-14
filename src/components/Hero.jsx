// import { FaAngleDown} from "react-icons/fa6"

import { 
  FaCss3Alt, FaHtml5,
   FaReact } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiRedux, SiSupabase } from "react-icons/si"

import Avatar from '../assets/avatar.svg'


const Hero = () => {
  return (
    <section className="hero w-full flex flex-col justify-center h-screen items-center bg-[#1d1d1d] text-[#6aff7f] overflow-hidden">
        {/* <h1 className="hero-heading text-7xl md:text-9xl tracking-tighter font-extrabold">Hello</h1> */}
        <div className="absolute w-96vw flex flex-col justify-center items-center px-5 md:px-40 gap-2 text-center z-40">
            <div className="w-full flex justify-center lg:justify-start px-5">
              <p className="hero-content px-3 text-xl opacity-0 capitalize font-medium">Hey there!</p>
            </div>
            <h2 className='hero-content text-7xl md:text-8xl font-extrabold tracking-tighter w-full text-center text-white opacity-0 drop-shadow-[0_5px_5px_rgb(0,0,0)]'>
                Osakhogba Akhator
            </h2> 
            <div className="w-full flex justify-center lg:justify-end">
              <p className="hero-content w-fit px-3 text-2xl md:text-3xl lg:text-4xl uppercase font-medium opacity-0 text-center lg:text-right ">Frontend Engineer</p>
            </div>
        </div>
        
        <div className="relative top-80 md:top-72 w-full flex justify-center items-center z-20">
          <div className="skills bg-[#09200d]/50 px-10 py-5 rounded-full backdrop-blur-sm lg:w-[50%] flex justify-evenly gap-5 text-2xl text-white/30 translate-y-32 opacity-0">
            <div className="group relative flex flex-col justify-center items-center hover:text-orange-500 cursor-pointer transition-all duration-200">
              <FaHtml5/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">HTML5</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-[#3864b7] cursor-pointer transition-all duration-200">
              <FaCss3Alt/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">CSS3</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-yellow-400 cursor-pointer transition-all duration-200">
              <IoLogoJavascript/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">Javascript</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-[#58b4f7] cursor-pointer transition-all duration-200">
              <RiTailwindCssFill/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">TailwindCSS</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-[#53d1ff] cursor-pointer transition-all duration-200">
              <FaReact/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">ReactJs</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-[#8c4ae9] cursor-pointer transition-all duration-200">
              <SiRedux/>
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">RTKit</p>
            </div>
            <div className="group relative flex flex-col justify-center items-center hover:text-green-400 cursor-pointer transition-all duration-200">
              {/* <RiNextjsFill/> */}
              <SiSupabase />
              <p className="text-[10px] font-bold hidden group-hover:flex absolute top-5">Supabase</p>
            </div>
          </div>
        </div>

        <img src={Avatar} alt="My avatar" id="top" className="avatar opacity-0 w-[60%] md:w-[60%] lg:w-[25%] absolute top-28 lg:top-25 lg:right-20 z-0 brightness-75 hover:brightness-90 hover:z-40 hover:scale-105 duration-150 transition-all"/>
    </section>
  )
}

export default Hero
// 6aff7f
// 003816
