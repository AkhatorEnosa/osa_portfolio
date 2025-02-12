const About = () => {
  return (
    <section  className='relative about-me w-full z-40'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-24 bg-[#1d1d1d] lg:pt-40 px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f]/50 text-center">About Me</h1>
      </div>
      <div className="about-me-content w-full h-fit bg-[#1d1d1d] text-white py-10 md:py-20 overflow-scroll z-0">
          <div className=" w-full flex flex-col justify-center items-center h-full px-10 lg:px-32">
            <div className="w-full text-sm md:text-xl font-thin text-center">
                <p id="about" className="about-text tracking-wide lg:leading-9">

                  I&lsquo;m a <b>Frontend Developer</b> equipped with a <b>B.Sc in Computer Science</b>, with experience in both <b>frontend and backend
                  development</b>, aimed at constructing applications that are both <b>functional and scalable</b>. I&lsquo;ve familiarized myself with
                  modern frameworks like <b>ReactJS</b> for building responsive user interfaces, <b>TailwindCSS</b> for efficient styling, and <b>Redux
                  Toolkit</b> for state management. On the backend, I&lsquo;ve engaged with <b>Supabase</b>, particularly its <b>PostgreSQL database</b>, to
                  manage data effectively. My approach is to contribute to projects by ensuring they meet user needs while maintaining
                  performance standards. I have a passion for creating user experiences that feel intuitive and solving real-world problems
                  through technology. I&lsquo;m dedicated to continuous learning, recognizing that staying updated in software engineering is
                  key to delivering quality work. 
                
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
