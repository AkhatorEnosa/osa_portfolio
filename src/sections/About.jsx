import { motion } from 'framer-motion'

const About = () => {
  return (
    <section  className='relative about-me max-w-[1600px] w-full bg-[#1d1d1d] z-40'>
      <motion.div 
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full flex flex-col justify-center items-center py-10 md:py-24 lg:pt-40 px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f]/50 text-center">About Me</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="about-me-content w-full h-fit text-white py-10 md:py-20 overflow-scroll z-0 flex flex-col justify-center items-center px-20 lg:px-32 text-sm md:text-xl font-medium text-center lg:leading-9">

          <p>I&lsquo;m a <b>Frontend Developer</b> with a <b>B.Sc in Computer Science</b>, passionate about crafting <b>intuitive, responsive, and scalable</b> applications. I specialize in modern tools like <b>ReactJS</b> for sleek user interfaces, <b>TailwindCSS</b> for streamlined styling, and <b>Redux Toolkit</b> for seamless state management. I&lsquo;ve also worked with <b>Supabase</b> and <b>PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I&lsquo;m open to <b className="animate animate-bounce">remote work</b> opportunities and thrive on continuous learning to stay ahead in the ever-evolving tech landscape.</p>

      </motion.div>
    </section>
  )
}

export default About
// 6aff7f
// 003816
