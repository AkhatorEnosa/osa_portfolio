/* eslint-disable react/prop-types */
import { LuConstruction } from "react-icons/lu"
import Button from "./Button"
import TechStack from "./TechStack"
import { motion } from "framer-motion"

const Cards = (props) => {

  return (
      <motion.div 
        initial={{ opacity: 0, translateY: "-30px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className='card break-inside-avoid group relative max-w-96 flex flex-col justify-between gap-2 items-center pb-5 lg:pb-10 rounded-lg bg-black/20 text-white border-[1px] border-white/20 hover:border-none cursor-default overflow-clip lg:shadow-sm lg:hover:shadow-none transition-all duration-500 z-50'
      >

          {props.building && <div className="absolute rounded-full flex justify-center items-center px-2 py-2 gap-2 shadow-md bg-[#fff86a] text-black border-[1px] border-black right-2 top-2 z-[2000] cursor-pointer"><LuConstruction /> <span className="text-xs lg:hidden group-hover:flex">Work in Progress</span></div>}

          <div className='relative w-full overflow-hidden rounded-lg'>
            <img src={props.imagePath2} alt={props.alt} className='group-hover:scale-125 h-52 w-full object-cover transition-all duration-500 '/>
            {/* <img src={props.imagePath} alt={props.alt} className='hidden group-hover:flex h-52 w-full object-cover transition-all duration-500'/> */}
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className='text-lg my-5 uppercase font-semibold px-4'>{props.heading}</h2>

            <TechStack 
              stack={props.stack}
            />
          </div>

          <div
            className='mt-4 text-center lg:hidden px-4 text-xs md:text-sm'>
              {props.details}
            <div className='w-full flex gap-4 justify-center align-center mt-4'>
              <Button title={"Demo"} link={props.demoLink}/>
              {/* <Button title={"Code"} link={props.codeLink}/> */}
            </div>
          </div>


          {/* hover backdrop  */}
          <div className="hidden lg:block lg:opacity-0 lg:-translate-y-20 project-backdrop absolute w-full h-full group-hover:bg-black/85 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-2 border-[#6aff7f] rounded-lg transition-all duration-500">
            <div className="w-full h-full font-medium flex flex-col justify-center text-center items-center gap-8 px-5 text-sm">
                <h2 className="w-full text-white">{props.details}</h2>
                <Button title={"Demo"} link={props.demoLink}/>
            </div>
            {/* <div className="text-white absolute flex justify-center items-center text-2xl w-10 h-10 top-3 right-3 p-3 bg-white/20 rounded-full hover:bg-[#6aff7f]/20">
              <BsArrowsAngleExpand/>
            </div> */}
          </div>
      </motion.div>
  )
}

export default Cards
