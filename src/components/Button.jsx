/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <a href={props.link} target="_blank" className=" cursor-pointer">
       <button className="px-7 py-2 text-white font-medium bg-[#ff6a25] hover:bg-[#262a40] hover:text-[#ff6a25] transition-all duration-200">
          <label className="bold-16 whitespace-nowrap">{props.title}</label>
      </button>
    </a>
  )
}

export default Button 