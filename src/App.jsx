import Projects from "./components/Projects";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import SplitType from "split-type";
import Nav from "./components/Nav";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)


function App() {

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
    }).to(".skills", {
      opacity: 1,
      translateY: "0px"
    })

  const ourText = new SplitType('p.about-text')
  const words = ourText.lines

      gsap.from(words, {
        opacity:0,
        // duration: 0.5, 
        stagger: 0.1, 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-me",
          start: "-20%", // start when the top of the <h1> reaches 70% down from the top of the viewport
          // toggleActions: "none none none reverse"
        }
      })

      gsap.from(".card", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects",
        scrub: true,
      }
    })
  })

  return (
    <div className="w-full flex flex-col">
      <Nav />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App;
