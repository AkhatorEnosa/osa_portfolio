import { useState } from "react"

import Card from "../components/Card"
// import Shaup from '../assets/shaup.png'
import Unscramble from '../assets/unscramble.png'
// import Kwota from '../assets/kwota.png'
import Soozeer from '../assets/sooozeer.png'
import myNoet from '../assets/mynoet.png'
import Moovees from '../assets/moovees.png'
import doTaska from '../assets/dotaska.png'
import Lokateur from '../assets/lokateur.png'
import Splitter from '../assets/splitter.png'
import Genotype from '../assets/gmc.png'
import Techkare from '../assets/techkare.png'
// import Foodie2 from '../assets/foodie.png'
// import Foodie from '../assets/foodie.gif'
import Kickrs from '../assets/kickrs.png'
import { motion } from "framer-motion"

const Projects = () => {
  const [reveal, setReveal] = useState(false)

  return (
    <section  className='relative projects w-full h-auto z-40 clear-both bg-[#1d1d1d] max-w-[1600px]'>
      <motion.div 
        initial={{ opacity: 0, translateY: "50px" }}
        whileInView={{ opacity: 1, translateY: "0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full flex flex-col justify-center items-center py-10 md:py-24 lg:pt-40 px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f]/50 text-center">Projects</h1>
      </motion.div>
      <div className="projects-content w-full text-[#6aff7f] py-10 md:py-20 overflow-scroll">
        

          <div className="w-full flex flex-col justify-center items-center h-full px-0 md:px-10 lg:px-32">
            {/* <div className='w-full md:columns-2 lg:columns-3 gap-4 space-y-10 md:space-y-4 px-12 md:p-5'> */}
            <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 gap-4 px-12 md:p-5 justify-center'>
            {/* <div className='w-full flex flex-wrap gap-4 px-12 md:p-5'> */}

              <Card 
                heading="Soozeer" 
                imagePath={Soozeer} 
                imagePath2={Soozeer} 
                alt="Soozeer" 
                details="A dynamic and interactive social media platform built with React, Redux Toolkit, React Query, and Supabase. Featuring seamless state management, real-time updates, and secure user authentication, this platform delivers a modern and scalable social experience. Connect, share, and engage like never before! 🚀"  
                stack={['reactjs', 'tanstack query', 'redux toolkit', 'tailwindcss', 'supabase']} 
                demoLink="https://soozeer.netlify.app/" 
                building={false}
              // codeLink="https://github.com/AkhatorEnosa/quotes-app"
              />

              <Card 
                heading="myNoet" 
                imagePath={myNoet} 
                imagePath2={myNoet} 
                alt="myNoet" 
                details="myNoet is an application meticulously crafted to mirror the spirit of Google Keep, thoughtfully designed to provide users with a swift and seamless platform for capturing their ideas and thoughts with exceptional ease and efficiency, unencumbered by unnecessary complexities."  
                stack={['reactjs', 'tanstack query', 'redux toolkit', 'tailwindcss', 'supabase']} 
                demoLink="https://mynoet.netlify.app/" 
                building={false}
              // codeLink="https://github.com/AkhatorEnosa/quotes-app"
              />

              <Card 
                heading="Moovees" 
                imagePath={Moovees} 
                imagePath2={Moovees} 
                alt="Moovees" 
                details="A platform built with ReactJS that integrates TMDB's API to display movie details, trailers, ratings, and recommendations. Designed for ease of use, it offers a clean and efficient way to explore films." 
                stack={['reactjs', 'tailwindCss', 'appwrite']} 
                demoLink="https://moovees.netlify.app/" 
                building={false}
              // codeLink="https://github.com/AkhatorEnosa/foodie_land"
              />

              { 
                reveal &&
                <>

                <Card 
                  heading="DoTaska" 
                  imagePath={doTaska} 
                  imagePath2={doTaska} 
                  alt="DoTaska" 
                  details="is a sleek task management tool that delivers a client-side experience with dynamic, animated UI components. Blazing fast via Netlify’s CDN, it boasts a polished, responsive design that blends Tailwind’s precision with Motion’s smooth animations which aim to make task management fast and easy." 
                  stack={['reactjs', 'typescript', 'motion', 'tailwindCss']} 
                  demoLink="https://dotaska.netlify.app/" 
                  building={true}
                // codeLink="https://github.com/AkhatorEnosa/foodie_land"
                />

                  <Card 
                    heading="Techkare" 
                    imagePath={Techkare} 
                    imagePath2={Techkare} 
                    alt="techKare" 
                    details="A centralized platform for managing and displaying patient data, designed to streamline workflows and improve care delivery. Built with ReactJS and integrated with a robust API, it ensures seamless functionality." 
                    stack={['reactjs', 'Api', 'tailwindcss']} 
                    demoLink="https://techkare.netlify.app/" 
                    building={false}
                  // codeLink="https://github.com/AkhatorEnosa/techcare"
                  />

                  <Card 
                    heading="Splitter" 
                    imagePath={Splitter} 
                    imagePath2={Splitter} 
                    alt="Splitter" 
                    details="A user-friendly web application designed to simplify splitting bills between two or more people, including optional tip calculations. Built with HTML, CSS, and JavaScript, it offers a clean and intuitive interface for quick and accurate bill division." 
                    stack={['html', 'css', 'javascript']} 
                    demoLink="https://splitify.netlify.app/" 
                    building={false}
                  // codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"
                  />

                  <Card 
                    heading="Lokateur" 
                    imagePath={Lokateur} 
                    imagePath2={Lokateur} 
                    alt="Lokateur" 
                    details="This website is a geolocation tool that converts IP addresses into detailed location data, including city, country, time zone, and currency. Built with precision and user-friendliness in mind, it provides accurate and instant results for developers, businesses, and curious users alike." 
                    stack={['reactjs', 'Api', 'tailwindcss']} 
                    demoLink="https://Lokateur.netlify.app/" 
                    building={false}
                  // codeLink="https://github.com/AkhatorEnosa/Lokateur"
                  />

                  <Card 
                    heading="Genotype Matching App" 
                    imagePath={Genotype} 
                    imagePath2={Genotype} 
                    alt="Genotype" 
                    details="The idea that birthed this project is to assist couples in determining if their genotypes are compatible for their future children. Designed with simplicity and accuracy in mind, it provides quick insights to support informed family planning decisions.
                    " 
                    stack={['html', 'css', 'javascript']} 
                    demoLink="https://akhatorenosa.github.io/genotype_match_checker" 
                    building={false}
                  // codeLink="https://github.com/AkhatorEnosa/genotype-match-checker"
                  />

                  <Card 
                    heading="Unscramble Game" 
                    imagePath={Unscramble} 
                    imagePath2={Unscramble} 
                    alt="Unscramble" 
                    details="A fun and engaging game where players unscramble letters to form valid words. Built to challenge vocabulary skills and improve cognitive agility, it’s perfect for word enthusiasts of all ages." 
                    stack={['reactjs', 'Api', 'Css']} 
                    demoLink="https://akhatorenosa.github.io/unscramble-game/" 
                    building={false}
                  // codeLink="hub.com/AkhatorEnosa/unscramble-game"
                  />

                  <Card 
                    heading="Kickrs" 
                    imagePath={Kickrs} 
                    imagePath2={Kickrs} 
                    alt="kickrs" 
                    details="A sleek and responsive product page designed to showcase items with detailed descriptions, and high-quality images. Built to enhance the shopping experience, it ensures seamless navigation and quick purchasing decisions." 
                    stack={['reactjs', 'tailwindcss']} 
                    demoLink="https://kickrs.netlify.app/" 
                    building={false}
                  // codeLink="https://github.com/AkhatorEnosa/product-page"
                  />
                </>

              }
              
            </div>

            <button className="flex mt-10 justify-center tems-center px-7 py-2 text-white text-sm rounded-full font-medium bg-[#003816] border-[1px] border-[rgb(106,255,127)] relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgb(106,255,127),transparent_90%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
              onClick={() => setReveal(!reveal)}
            >
                {reveal ? "Show Less" : "Show More"}
            </button>
          </div>
      </div>
    </section>
  )
}

export default Projects
// 6aff7f
// 003816


          // <div className="w-full overflow-scroll">

          //   <div className="flex w-[180vw] gap-8 px-8">

          //     <Card heading="Splitter" imagePath={Splitter} alt="Splitter" details="This project is based around building a web app to easily split bills between two or more persons including tips(if needed) and it is built using;" demoLink="https://splitify.netlify.app/" codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"/>
          //     <Card heading="Space Tourism" imagePath={SpaceTourism} alt="Space Tourism" details="Space Theme Tourism website." demoLink="https://spacetourtravel.netlify.app/" codeLink="https://github.com/AkhatorEnosa/space-tourism-website-main"/>
          //     <Card heading="Shaup" imagePath={Shaup} alt="Shaup" details="ECommerce Frontend website built with react." demoLink="https://shaup.netlify.app" codeLink="https://github.com/AkhatorEnosa/online-store"/>
          //     <Card heading="Techkare" imagePath={Techkare} alt="techKare" details="Healthcare Facility Dashboard displaying a Patient's Data" demoLink="https://techkare.netlify.app/" codeLink="https://github.com/AkhatorEnosa/techcare"/>
          //     <Card heading="Kickrs" imagePath={Kickrs} alt="kickrs" details="Product page for eCommerce website" demoLink="https://kickrs.netlify.app/" codeLink="https://github.com/AkhatorEnosa/product-page"/>
            
          //   </div>

          // </div>
