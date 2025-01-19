/* eslint-disable react/prop-types */
import { LuConstruction } from "react-icons/lu"
import Button from "./Button"
import TechStack from "./TechStack"

const Cards = (props) => {

  return (
      <div className='card break-inside-avoid group relative w-full flex flex-col justify-between gap-2 items-center py-5 rounded-lg bg-white text-[#003816] cursor-pointer lg:shadow-sm lg:hover:shadow-none transition-all duration-500 z-50'>

          {props.building && <div className="absolute rounded-full flex justify-center items-center px-2 py-2 gap-2 shadow-md bg-[#fff86a] -right-2 -top-5 z-[2000] cursor-pointer"><LuConstruction /> <span className="text-xs lg:hidden group-hover:flex">Work in Progress</span></div>}

          <h2 className='text-2xl font-thin text-center tracking-wider px-4'>{props.heading}</h2>

          <div className='relative w-full overflow-hidden'>
            <img src={props.imagePath2} alt={props.alt} className='group-hover:hidden h-auto w-full object-cover transition-all duration-500 '/>
            <img src={props.imagePath} alt={props.alt} className='hidden group-hover:flex h-auto w-full object-cover transition-all duration-500'/>
          </div>

            <TechStack 
              stack={props.stack}
              />

          <div className='text-center lg:hidden px-4 text-sm'>
              {props.details}
            <div className='w-full flex gap-4 justify-center align-center mt-4'>
              <Button title={"Demo"} link={props.demoLink}/>
              {/* <Button title={"Code"} link={props.codeLink}/> */}
            </div>
          </div>


          {/* hover backdrop  */}
          <div className="hidden lg:flex lg:opacity-0 project-backdrop absolute inset-0 bg-[#0a192f] group-hover:opacity-90 lg:group-hover:block group-hover:border-2 border-[#6aff7f] rounded-lg transition-all duration-500">
            <div className="w-full h-full font-extralight flex flex-col justify-center text-center items-center gap-4 px-5 text-sm">
                <h2 className="text-white">{props.details}</h2>
                <Button title={"Demo"} link={props.demoLink}/>
            </div>
            {/* <div className="text-white absolute flex justify-center items-center text-2xl w-10 h-10 top-3 right-3 p-3 bg-white/20 rounded-full hover:bg-[#6aff7f]/20">
              <BsArrowsAngleExpand/>
            </div> */}
          </div>
      </div>
  )
}

export default Cards
