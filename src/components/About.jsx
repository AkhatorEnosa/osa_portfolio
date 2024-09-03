const About = () => {
  return (
    <section  className='relative about-me w-full bg-[#6aff7f] z-40'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-32 lg:py-40 bg-[#003816] px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f] text-center">About Me</h1>
      </div>
      <div className="about-me-content w-full h-fit bg-[#1d1d1d] text-white py-10 md:py-20 overflow-scroll">
          <div className=" w-full flex flex-col justify-center items-center h-full px-10 lg:px-32">
            <div className="w-full text-sm md:text-2xl font-thin text-center">
                <p className="about-text tracking-tight lg:leading-9">Hi, I am <b>Akhator Osakhogba</b>, A graduate and <b>BS.c</b> certified in <b>Computer Science</b> who got into tech because of my fascination and passion for building products on the web with code. I have a workng knowlegde of <b>HTML5, CSS3, TailwindCSS, JavaScript, and ReactJs</b>. I take detail-oriented approach to building website&lsquo;s responsiveness, effectiveness and usability. <b>Passionate</b> with strong <b>organizational skills</b> and ready to help team achieve company goals.
                My hobbies when not coding includes; Listening to music(any genre), playing video games out of a few.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
// 6aff7f
// 003816
