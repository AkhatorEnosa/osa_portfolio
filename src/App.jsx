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

    tl.to(".hero-heading", {
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
        trigger: ".projects-content",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        markers: true
      },
        stagger: 1,
      skewX: "0deg",
      opacity: 1,
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      duration: 1,
    }).to(".nav-lg", {
      scrollTrigger: {
        trigger: ".about-me",
        start:"top",
        scrub:1,
          toggleActions: "restart none none reverse"
      },
      position: "fixed"
    })

  const ourText = new SplitType('p.about-text')
  const words = ourText.words


      gsap.from(words, {
        opacity:0,
        duration: 2, 
        stagger: 0.1, 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 70%", // start when the top of the <h1> reaches 70% down from the top of the viewport
          end: "bottom bottom",
          toggleActions: "restart none none reverse"
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