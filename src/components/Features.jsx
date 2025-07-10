import { useRef, useState } from "react";
import Card from "../components/Card";
import RegisterModal from "../components/RegisterModal";
import { Frameworks } from "../components/FrameWorks";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Features = () => {
  const [showRegister, setShowRegister] = useState(false)
  useGSAP(() => {
    const split = new SplitText(".reasons", { type: "chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".reasons",
      },
    });

    tl.from(split.chars, {
      y: 100,
      rotationX: 90,
      opacity: 0,
      color: "#ffffff",
      stagger: 0.03,
      duration: 1,
      transformOrigin: "center top",
      perspective: 700,
    }).to(split.chars, {
      duration: 1,
      stagger: 0.04,
      ease: "power2.inOut",
    });
  }, []);

  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing text-xl mb-20" id="about">
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-[acma-black] text-center reasons">
        Reasons to Join Us!
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

       
        <div className="flex relative items-end grid-default-color grid-1 min-h-[16rem]">
          <img
            src="https://toppng.com/uploads/preview/code-text-programming-letters-symbols-11569818411fpnugmoo1n.jpg"
            className="absolute disable scale-[1.4] right-[-4rem] top-[-2rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[1.2] lg:left-0 lg:top-0"
          />
          <div className="bg-transparent z-10 p-4 md:p-6">
            <p className="headtext font-[acma-semi] text-lg sm:text-xl">
              Real-World Projects
            </p>
            <p className="subtext font-[absans] text-sm sm:text-base">
              Work on innovative projects that solve actual problems and build your portfolio while learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

  
        <div className="grid-default-color grid-2 min-h-[18rem]">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full relative">
            <p className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-xl font-[absans] text-gray-500">
              Focus Areas
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Web Development"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="App Development"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Cyber Security"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Video Editing"
              containerRef={grid2Container}
            />
          </div>
        </div>

      
        <div className="grid-black-color relative grid-3 min-h-[16rem] p-4">
          <div className="w-[60vh] h-[60vh] blur-2xl disable rounded-full right-[-15%] bottom-[-40%] bg-gray-500 absolute"></div>
          <div className="z-10 w-full sm:w-[60%]">
            <p className="headtext font-[acma-semi] text-lg sm:text-xl">
              Community Spirit
            </p>
            <p className="subtext font-[absans] text-sm sm:text-base">
              Join a friendly community of developers where everyone helps each other grow and succeed.
            </p>
          </div>
        </div>

       
        <div className="grid-special-color grid-4 min-h-[16rem]">
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full text-center">
            <p className="font-[absans] text-lg sm:text-xl headtext px-2">
              Do you want to start a project together?
            </p>
            
            <button
            onClick={() => setShowRegister(true)}
            className="bg-indigo text-white px-4 py-2 rounded-xl font-[absans] hover:bg-indigo-600 transition"
>
  Apply Now
</button>
          </div>
        </div>

    
        <div className="grid-default-color grid-5 relative min-h-[16rem]">
          <div className="z-10 w-full sm:w-[60%] p-4">
            <p className="headtext font-[acma-semi] text-lg sm:text-xl">
              Developer Network
            </p>
            <p className="subtext font-[absans] text-sm sm:text-base">
              Connect with like-minded developers, share knowledge, and build lasting professional relationships in the tech community.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
      
{showRegister && <RegisterModal close={() => setShowRegister(false)} />}
    </section>
    
  );
};

export default Features;
