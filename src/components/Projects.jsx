import Cards from "./Cards"
import Shaup from '../assets/shaup.png'
import SpaceTourism from '../assets/space_tourism.png'
import Lokateur from '../assets/lokateur.png'
import Splitter from '../assets/splitter.png'
import Techkare from '../assets/techkare.png'
import Kickrs from '../assets/kickrs.png'

const Page = () => {

  return (
    <section  className='projects w-full h-screen bg-[#6aff7f] z-50'>
      <div className="absolute w-full flex flex-col justify-center items-center py-10 md:py-32 lg:py-40 bg-[#6aff7f] px-0  md:px-36 z-50">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#003816] text-center">Projects</h1>
      </div>
      <div className="projects-content w-full bg-[#003816] text-[#6aff7f] py-10 md:py-20 overflow-scroll">
        

          <div className="w-full flex flex-col justify-center items-center h-full px-0 md:px-10 lg:px-32">
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-0 md:p-5'>

              <Cards heading="Space Tourism" imagePath={SpaceTourism} alt="Space Tourism" details="Space Theme Tourism website."  stack="html . css" demoLink="https://spacetourtravel.netlify.app/" codeLink="https://github.com/AkhatorEnosa/space-tourism-website-main"/>
              <Cards heading="Splitter" imagePath={Splitter} alt="Splitter" details="This project is based around building a web app to easily split bills between two or more persons including tips(if needed)" stack="html . css . js" demoLink="https://splitify.netlify.app/" codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"/>
              <Cards heading="Kickrs" imagePath={Kickrs} alt="kickrs" details="Product page for eCommerce website" stack="html . css . js . tailwindcss . reactjs" demoLink="https://kickrs.netlify.app/" codeLink="https://github.com/AkhatorEnosa/product-page"/>
              <Cards heading="Lokateur" imagePath={Lokateur} alt="Lokateur" details="Geolocation grabber with IP address website" stack="html . css . js . tailwindcss . reactjs . api" demoLink="https://Lokateur.netlify.app/" codeLink="https://github.com/AkhatorEnosa/Lokateur"/>
              <Cards heading="Shaup" imagePath={Shaup} alt="Shaup" details="ECommerce Frontend website built with react." stack="html . css . js . tailwindcss . reactjs, api" demoLink="https://shaup.netlify.app" codeLink="https://github.com/AkhatorEnosa/online-store"/>
              <Cards heading="Techkare" imagePath={Techkare} alt="techKare" details="Healthcare Facility Dashboard displaying a Patient's Data" stack="html . css . js . tailwindcss . reactjs . api" demoLink="https://techkare.netlify.app/" codeLink="https://github.com/AkhatorEnosa/techcare"/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Page
// 6aff7f
// 003816


          // <div className="w-full overflow-scroll">

          //   <div className="flex w-[180vw] gap-8 px-8">

          //     <Cards heading="Splitter" imagePath={Splitter} alt="Splitter" details="This project is based around building a web app to easily split bills between two or more persons including tips(if needed) and it is built using;" demoLink="https://splitify.netlify.app/" codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"/>
          //     <Cards heading="Space Tourism" imagePath={SpaceTourism} alt="Space Tourism" details="Space Theme Tourism website." demoLink="https://spacetourtravel.netlify.app/" codeLink="https://github.com/AkhatorEnosa/space-tourism-website-main"/>
          //     <Cards heading="Shaup" imagePath={Shaup} alt="Shaup" details="ECommerce Frontend website built with react." demoLink="https://shaup.netlify.app" codeLink="https://github.com/AkhatorEnosa/online-store"/>
          //     <Cards heading="Techkare" imagePath={Techkare} alt="techKare" details="Healthcare Facility Dashboard displaying a Patient's Data" demoLink="https://techkare.netlify.app/" codeLink="https://github.com/AkhatorEnosa/techcare"/>
          //     <Cards heading="Kickrs" imagePath={Kickrs} alt="kickrs" details="Product page for eCommerce website" demoLink="https://kickrs.netlify.app/" codeLink="https://github.com/AkhatorEnosa/product-page"/>
            
          //   </div>

          // </div>
