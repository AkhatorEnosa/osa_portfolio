const About = () => {
  return (
    <section  className='relative about-me w-full bg-[#6aff7f]'>
      <div className="w-full flex flex-col justify-center items-center py-20 md:py-30 lg:py-40 bg-[#6aff7f] px-36 overflow-hidden">
        <h1 className="text-7xl lg:text-9xl font-extrabold text-[#003816]">About Me</h1>
      </div>
      <div className="w-full h-fit bg-[#003816] text-[#6aff7f] py-28 overflow-scroll">
          <div className=" w-full flex flex-col justify-center items-center h-full px-10 lg:px-32">
            <div className="w-full text-lg md:text-2xl font-thin text-center tracking-wider">
                <p className="about-text">Hi, I am <b>Akhator Osakhogba</b>, A graduate and <b>BS.c</b> certified in <b>Computer Science</b> who got into tech because of my fascination and passion for building products on the web with code. I have a workng knowlegde of <b>HTML5, CSS3, TailwindCSS, JavaScript, ReactJs, and Wordpress</b>. I take detail-oriented approach to building website&lsquo;s responsiveness, effectiveness and usability. <b>Hardworking and passionate</b> with strong <b>organizational skills</b> and ready to help team achieve company goals.
                My hobbies when i am not coding includes; Listening to music(any genre), playing video games out of a few.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
// 6aff7f
// 003816