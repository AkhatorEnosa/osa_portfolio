const About = () => {
  return (
    <section  className='relative about-me w-full z-40'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-24 bg-[#1d1d1d] lg:pt-40 px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f]/50 text-center">About Me</h1>
      </div>
      <div className="about-me-content w-full h-fit bg-[#1d1d1d] text-white py-10 md:py-20 overflow-scroll z-0">
          <div className=" w-full flex flex-col justify-center items-center h-full px-20 lg:px-32">
            <div className="w-full text-sm md:text-xl font-semibold text-center">
                <p id="about" className="about-text lg:leading-9">

                <p>I&lsquo;m a <b>Frontend Developer</b> with a <b>B.Sc in Computer Science</b>, passionate about crafting <b>intuitive, responsive, and scalable</b> applications. I specialize in modern tools like <b>ReactJS</b> for sleek user interfaces, <b>TailwindCSS</b> for streamlined styling, and <b>Redux Toolkit</b> for seamless state management. I&lsquo;ve also worked with <b>Supabase</b> and <b>PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I&lsquo;m open to <b className="animate animate-bounce">remote work</b> opportunities and thrive on continuous learning to stay ahead in the ever-evolving tech landscape.</p>
                
                </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
// 6aff7f
// 003816
