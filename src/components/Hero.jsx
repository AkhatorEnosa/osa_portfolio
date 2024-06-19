// import { FaAngleDown} from "react-icons/fa6"

const Hero = () => {
  return (
    <section  className="hero w-full flex flex-col gap-0 justify-center h-screen items-center bg-[#003816] text-[#6aff7f]">
        <h1 className="hero-heading text-7xl md:text-9xl font-medium">Hello</h1>
        <div className="absolute flex flex-col gap-2 text-center">
            <p className="hero-content uppercase opacity-0">I am</p>
            <h2 className='hero-content text-7xl md:text-8xl font-medium tracking-tighter w-full text-center text-white opacity-0 z-0'>
                Akhator Osakhogba
            </h2> 
            <p className="hero-content bounce text-4xl md:text-5xl uppercase font-thin opacity-0">Frontend Developer</p>
        </div>
    </section>
  )
}

export default Hero
// 6aff7f
// 003816