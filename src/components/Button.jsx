/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <a href={props.link} target="_blank" className="button cursor-pointer">
       {/* <button className="flex justify-center items-center px-7 py-2 text-white text-sm bg-[#003816] hover:bg-[#6aff7f] hover:text-[#003816] hover:shadow-md rounded-full lg:border-[1px] lg:border-[#6aff7f] transition-all duration-200"> */}
       <button className="flex justify-center tems-center px-7 py-2 text-white text-sm rounded-full font-medium bg-[#003816] lg:border-[1px] lg:border-[rgb(106,255,127)] relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgb(106,255,127),transparent_90%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]">
          {props.title}
      </button>
    </a>
  )
}

export default Button 
// 6aff7f
// 003816

// inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]