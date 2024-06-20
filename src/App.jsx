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
gsap.registerPlugin(ScrollTrigger);


function App() {

    // console(removeElement);
  useGSAP(() => {
    var tl = gsap.timeline();

    tl.to(".logo", {
      transform: "rotate(0deg)",
      opacity: 1,
      duration: 1
    }).to(".hero-heading", {
      opacity: 0,
      duration: 0.5,
      delay: 1,
    }).to(".hero-content", {
      opacity: 1,
      stagger: 1,
    }).to(".bounce", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1
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


  })

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Nav />
      <Sidebar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App;