/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <a href={props.link} target="_blank" className="button cursor-pointer">
       <button className="flex justify-center items-center px-7 py-2 text-white text-sm bg-[#003816] hover:bg-[#6aff7f] hover:text-[#003816] hover:shadow-md rounded-full lg:border-[1px] lg:border-[#6aff7f] transition-all duration-200">
          {props.title}
      </button>
    </a>
  )
}

export default Button 
// 6aff7f
// 003816
