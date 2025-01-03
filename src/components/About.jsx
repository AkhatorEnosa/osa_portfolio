const About = () => {
  return (
    <section  className='relative about-me w-full bg-[#6aff7f] z-40'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-32 lg:py-40 bg-[#003816] px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f] text-center">About Me</h1>
      </div>
      <div className="about-me-content w-full h-fit bg-[#1d1d1d] text-white py-10 md:py-20 overflow-scroll">
          <div className=" w-full flex flex-col justify-center items-center h-full px-10 lg:px-32">
            <div className="w-full text-sm md:text-xl font-thin text-center">
                <p className="about-text tracking-wide lg:leading-9">I am <b>Akhator Osakhogba</b>, a <b>Bachelor of Science graduate in Computer Science</b>, dedicated to advancing web development through innovation. My proficiency spans <b>HTML5, CSS3, TailwindCSS, JavaScript, and ReactJS</b>, enabling the creation of visually compelling and highly functional digital solutions.

                My methodology is <b>detail-centric</b>, focusing on enhancing the <b>responsiveness, effectiveness, and usability</b> of websites to offer superior user experiences.

                Elevating beyond basic functionality, my focus is on crafting <b>immersive digital experiences</b> that not only engage but also captivate audiences.

                In my personal time, I indulge in exploring various music genres and strategic video gaming, activities that hone my creative and problem-solving skills.

                Connect with me to harness my commitment to <b>innovation and excellence</b> for your project&lsquo;s success.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
// 6aff7f
// 003816
