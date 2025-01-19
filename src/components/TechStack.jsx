/* eslint-disable react/prop-types */
const TechStack = (props) => {

  return (
    <div className="flex w-full text-xs px-5 gap-4 mt-5 justify-center items-center">
      {props.stack.map((stack) => (
        <p key={stack + Math.random()} className="uppercase bg-gray-200 rounded-lg px-2 border-[1px] border-[rgba(0,0,0,0.3)]">{stack}</p>
      ))}
    </div>
  )
}

export default TechStack