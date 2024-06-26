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
      transform: "rotate(0deg)",
      opacity: 1,
      duration: 1,
    }).to("#stars", {
      opacity: 0.5,
      yoyo: true,
      yoyoEase: "power",
      repeat: -1,
      duration: 4
    }).to(".hero", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".about-me",
        scrub: true
      }
    }).to(".hero-content", {
      opacity: 1,
      stagger: 1,
      delay: -2
    }).from(".about-me-content", {
      backgroundColor: "black",
      scrollTrigger: {
        start: "top -30%",
        end: "bottom bottom",
        scrub: true,
        pin: true
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
    }).to(".side-bar", {
      opacity: 1,
      delay: -5
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