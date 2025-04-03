/* eslint-disable react/prop-types */
const TechStack = (props) => {

  return (
    <div className="flex w-full text-[10px] px-5 flex-wrap gap-2 justify-center items-center">
      {props.stack.map((stack) => (
        <p key={stack + Math.random()} className="uppercase flex justify-center tems-center px-2 text-white rounded-full font-medium bg-[#003816] border-[1px] border-[rgb(106,255,127)]/20">{stack}</p>
      ))}
    </div>
  )
}

export default TechStack