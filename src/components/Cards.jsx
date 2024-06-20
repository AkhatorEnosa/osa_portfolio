/* eslint-disable react/prop-types */
import Button from "./Button"
import TechStack from "./TechStack"

const Cards = (props) => {

  return (
      <div className='card lg:w-[500px] flex flex-col justify-between gap-4 items-center py-5 rounded-lg bg-white text-[#003816] cursor-pointer opacity-85 lg:shadow-sm lg:hover:shadow-none transition-all duration-500'>

          <h2 className='text-2xl font-thin text-center tracking-wider border-b-2 px-4 mb-5'>{props.heading}</h2>

          <div className='relative w-full group overflow-hidden'>
            <img src={props.imagePath} alt={props.alt} className='h-auto w-full object-cover group-hover:scale-105 transition-all duration-500'/>
            <div className="hidden project-backdrop lg:group-hover:flex absolute inset-0 bg-[#0a192f] opacity-90 transition-all duration-500"></div>
            <div className="hidden font-extralight lg:group-hover:flex absolute inset-0 justify-center text-center items-center z-10 p-5 transition-all duration-500">
                <h2 className="text-white">{props.details}</h2>
            </div>
          </div>

            <TechStack 
              stack={props.stack}
              />

          <details className='text-center lg:hidden px-4'>
              {props.details}
          </details>

          <div className='w-full flex gap-4 justify-center align-center mt-5'>
          <Button title={"Demo"} link={props.demoLink}/>
          <Button title={"Code"} link={props.codeLink}/>
          </div>

      </div>
  )
}

export default Cards