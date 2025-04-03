/* eslint-disable react/prop-types */
const SideLink = ({ title, bgColor, variant, link, icon}) => {
  return (
    <li className={`side-link w-fit h-[45px] lg:w-[140px] lg:h-[60px] flex items-center px-3 lg:px-5 lg:-translate-x-20 hover:-translate-x-0 hover:lg:rounded-r-lg duration-300 ${bgColor} z-50 ${variant}`}>
        <a href={link} target="_blank" className='w-fit lg:w-full flex justify-between items-center'><span className="hidden lg:flex">{title}</span>
            {/* <BsFillPersonLinesFill /> */}
            {icon}
            {/* <BsEnvelopePaper className="text-xl lg:text-2xl"/> */}
        </a>
    </li>
  )
}

export default SideLink