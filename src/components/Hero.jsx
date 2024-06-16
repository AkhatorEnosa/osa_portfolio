import { FaAngleDown} from "react-icons/fa6"

const Hero = () => {
  return (
    <section  className="hero w-full flex flex-col gap-0 justify-center h-screen items-center bg-[#ff6a25] text-[#262a40]">
        <h1 className="hero-heading text-9xl font-medium">Hello</h1>
        <div className="absolute flex flex-col gap-2 text-center">
            <p className="hero-content uppercase opacity-0">I am</p>
            <h2 className='hero-content text-8xl font-medium tracking-tighter w-full text-center text-white opacity-0 z-0'>
                Akhator Osakhogba
            </h2> 
            <p className="hero-content text-5xl uppercase font-thin opacity-0">Frontend Developer</p>

            <div className="scroll-btn absolute w-full flex flex-col justify-center items-center -bottom-52 font-medium text-sm">
                <p>Scroll Down</p>
                <FaAngleDown />
            </div>
        </div>
    </section>
  )
}

export default Hero