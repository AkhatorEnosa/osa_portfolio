const TechStack = (props) => {

  return (
    <div className="flex w-full text-xs font-thin px-5 gap-6 justify-center items-center">
        <h1>STACK &gt;</h1>
        <p className="font-bold uppercase">{props.stack}</p>
        <p></p>
    </div>
  )
}

export default TechStack