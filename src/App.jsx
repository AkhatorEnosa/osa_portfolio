import Page from "./components/Page";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

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
    }).to(".scroll-btn", {
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
    })
  })

  return (
    <div className="w-full flex flex-col">
      <Sidebar />
      <Hero />
      <Page />
    </div>
  )
}

export default App;