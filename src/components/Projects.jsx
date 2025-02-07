import Cards from "./Cards"
// import Shaup from '../assets/shaup.png'
import Unscramble from '../assets/unscramble.png'
import Kwota from '../assets/kwota.png'
import Soozeer from '../assets/sooozeer.png'
import Moovees from '../assets/moovees.png'
import Lokateur from '../assets/lokateur.png'
import Splitter from '../assets/splitter.png'
import Genotype from '../assets/gmc.png'
import Techkare from '../assets/techkare.png'
import Foodie2 from '../assets/foodie.png'
import Foodie from '../assets/foodie.gif'
import Kickrs from '../assets/kickrs.png'

const Page = () => {

  return (
    <section  className='relative projects w-full h-auto z-40 clear-both'>
      <div className="w-full flex flex-col justify-center items-center py-10 md:py-24 bg-[#1d1d1d] lg:pt-40 px-10 md:px-36">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#6aff7f]/50 text-center">Projects</h1>
      </div>
      <div className="projects-content w-full bg-[#1d1d1d] text-[#6aff7f] py-10 md:py-20 overflow-scroll">
        

          <div className="w-full flex flex-col justify-center items-center h-full px-0 md:px-10 lg:px-32">
            <div className='w-full md:columns-2 lg:columns-3 gap-4 space-y-10 md:space-y-4 px-12 md:p-5'>

              <Cards heading="Soozeer" imagePath={Soozeer} imagePath2={Soozeer} alt="Soozeer" details="A social media platform that plans to promote relationship"  stack={['reactjs', 'redux toolkit', 'tailwindcss', 'supabase']} demoLink="https://soozeer.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/quotes-app"
              />

              <Cards heading="Foodie Land" imagePath={Foodie} imagePath2={Foodie2} alt="foodie land" details="A food recipe website" stack={['reactjs', 'nextJs', 'tailwindCss']} demoLink="https://foodeeland.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/foodie_land"
              />

              <Cards heading="Techkare" imagePath={Techkare} imagePath2={Techkare} alt="techKare" details="Healthcare Facility Dashboard displaying a Patient's Data" stack={['reactjs', 'Api', 'tailwindcss']} demoLink="https://techkare.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/techcare"
              />

              <Cards heading="Moovees" imagePath={Moovees} imagePath2={Moovees} alt="Moovees" details="A Movie website that consumes data from TMDB's rich movie API to render movies" stack={['reactjs', 'tailwindCss', 'appwrite']} demoLink="https://moovees.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/foodie_land"
              />

              <Cards heading="Lokateur" imagePath={Lokateur} imagePath2={Lokateur} alt="Lokateur" details="Geolocation grabber with IP address website" stack={['reactjs', 'Api', 'tailwindcss']} demoLink="https://Lokateur.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/Lokateur"
              />

              <Cards heading="Splitter" imagePath={Splitter} imagePath2={Splitter} alt="Splitter" details="This project is based around building a web app to easily split bills between two or more persons including tips(if needed)" stack={['html', 'css', 'javascript']} demoLink="https://splitify.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"
              />

              <Cards heading="Unscramble Game" imagePath={Unscramble} imagePath2={Unscramble} alt="Unscramble" details="A word unscrambling game" stack={['reactjs', 'Api', 'Css']} demoLink="https://akhatorenosa.github.io/unscramble-game/" building={false}
              // codeLink="hub.com/AkhatorEnosa/unscramble-game"
              />

              <Cards heading="Kickrs" imagePath={Kickrs} imagePath2={Kickrs} alt="kickrs" details="Product page for eCommerce website" stack={['reactjs', 'tailwindcss']} demoLink="https://kickrs.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/product-page"
              />

              {/* <Cards heading="Shaup" imagePath={Shaup} alt="Shaup" details="ECommerce Frontend website built with react." stack="html . css . js . tailwindcss . reactjs, api" demoLink="https://shaup.netlify.app" codeLink="https://github.com/AkhatorEnosa/online-store"/> */}

              <Cards heading="Genotype Matching App" imagePath={Genotype} imagePath2={Genotype} alt="Genotype" details="This app helps couples confirm if their genotypes are compatible for their unborn children" stack={['html', 'css', 'javascript']} demoLink="https://akhatorenosa.github.io/genotype_match_checker" building={false}
              // codeLink="https://github.com/AkhatorEnosa/genotype-match-checker"
              />

              <Cards heading="Kwota" imagePath={Kwota} imagePath2={Kwota} alt="Kwota" details="Random quotes generator."  stack={['reactjs', 'Css']} demoLink="https://kwota.netlify.app/" building={false}
              // codeLink="https://github.com/AkhatorEnosa/quotes-app"
              />
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
