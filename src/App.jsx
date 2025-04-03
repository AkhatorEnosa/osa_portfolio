import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from './sections/Nav';
import Sidebar from './sections/Sidebar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
// import SplitType from "split-type";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


function App() {

  useGSAP(() => {
    var tl = gsap.timeline();

    tl.to(".logo", {
      top: 0,
      opacity: 1,
      duration: 0.5,
    }).to(".avatar", {
      opacity: 1,
      stagger: 0.5,
    }).to(".hero-content", {
      opacity: 1,
      stagger: 0.5,
    }).to(".hero", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".about-me",
        scrub: true,
        start: '-40%'
      }
    }).to(".skills", {
      opacity: 1,
      translateY: "0px"
    })

  // const ourText = new SplitType('p.about-text')
  // const words = ourText.words

      // gsap.from("p.about-text", {
      //   opacity:0,
      //   scale: 0,
      //   // duration: 0.5, 
      //   stagger: 0.1, 
      //   ease: "power3.inOut",
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: ".about-me",
      //     start: "0%",
      //     // toggleActions: "none none none reverse"
      //   }
      // })

      // gsap.from(".card", {
      //   opacity: 0,
      //   scale: 0.5,
      //   rotate: "10deg",
      //   // duration: 1,
      //   scrollTrigger: {
      //     trigger: ".projects",
      //     start: "-10%",
      //     end: "bottom bottom",
      //     // scrub: true,
      //   }
      // })

      gsap.to(".nav", {
        position: "fixed",
        scrollTrigger: {
          trigger: ".hero",
          start: "50%",
          scrub: true,
        }
      })

      // gsap.from(".footer", {
      //   opacity: 0,
      //   bottom: "-20px",
      //   scrollTrigger: {
      //     trigger: ".projects",
      //     start: "60%"
      //   }
      // })
  })

  return (
    <div className="w-full flex flex-col words justify-center items-center bg-[#003816] text-white overflow-hidden">
      <Nav />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
