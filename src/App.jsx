import Projects from "./components/Projects";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import SplitType from "split-type";
import Nav from "./components/Nav";
import Spaceman from "./components/Spaceman";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


function App() {

    // console(removeElement);
  useGSAP(() => {
    var tl = gsap.timeline();

    tl.to(".logo", {
      top: 0,
      opacity: 1,
      duration: 1,
    }).to(".hero-content", {
      opacity: 1,
      stagger: 1,
    }).to(".hero", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".about-me",
        scrub: true
      }
    }).to("#stars", {
      filter: "drop-shadow(0 0px 2px #6aff7f)",
      yoyo: true,
      yoyoEase: "power",
      repeat: -1,
      duration: 2,
    }).from(".about-me-content", {
      backgroundColor: "black",
      scrollTrigger: {
        start: "top -30%",
        end: "bottom bottom",
        scrub: true,
      }
    }).from(".projects-content", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".projects",
        start: "top -30%",
        scrub: true,
      }
    }).to(".card", {
      scrollTrigger: {
        trigger: ".projects",
        scrub: 1,
        start: "top",
        end: "4%",
      },
      opacity: 1,
      duration: 1,
    })
    
    gsap.to(".side-bar", {
          opacity: 1,
          duration: 2
    })

  const ourText = new SplitType('p.about-text')
  const words = ourText.lines

      gsap.from(words, {
        opacity:0,
        duration: 1, 
        stagger: 0.1, 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-me",
          start: "-20%", // start when the top of the <h1> reaches 70% down from the top of the viewport
          // toggleActions: "none none none reverse"
        }
      })

      gsap.from(".stars", {
        scale: 0,
        duration: 2,
    })

      gsap.to(".stars", {
          scale: 3,
          opacity: 0,
          scrollTrigger: {
            start: "top top",
              end: "bottom bottom"
          }
      })


  })

  return (
    <div className="w-full flex flex-col">
      <Nav />
      <Sidebar />
      <Hero />
      <Spaceman />
      <About />
      <Projects />
    </div>
  )
}

export default App;
