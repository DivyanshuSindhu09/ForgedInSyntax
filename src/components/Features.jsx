import { useRef } from "react";
import Card from "../components/Card";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks}  from "../components/FrameWorks";
import Spline from "@splinetool/react-spline";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Features = () => {
  useGSAP(()=>{
      const split = new SplitText(".reasons", { type: "chars" });
       const tl = gsap.timeline({scrollTrigger : {
        trigger : '.reasons',
        // start : 'top top'
       } });
  
      tl.from(split.chars, {
        y: 100,
        rotationX: 90,
        opacity: 0,
        color: "#ffffff",
        stagger: 0.03,
        duration: 1,
        transformOrigin: "center top",
        perspective: 700,
      })
        .to(split.chars, {
          duration: 1,
          stagger: 0.04,
          ease: "power2.inOut",
        })
    },[])
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing text-xl mb-20" id="about">
      <h2 className=" text-7xl font-[acma-black] reasons ">Reasons to Join Us!</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex relative items-end grid-default-color grid-1">
          <img

            src="https://toppng.com/uploads/preview/code-text-programming-letters-symbols-11569818411fpnugmoo1n.jpg"
            className="absolute disable scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[1.2] lg:left-0 lg:top-0"
          />
          
  

          <div className="bg-transparent z-10">
            <p className="headtext font-[acma-semi]">Real-World Projects</p>
            <p className="subtext font-[absans]">
              Work on innovative projects that solve actual problems and build your portfolio while learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl font-[absans] text-gray-500">
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
            {/* <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            /> */}
          </div>
        </div>
        {/* Grid 3 */}
        <div className=" grid-black-color relative grid-3">
          
          <div className="w-[60vh] h-[60vh] blur-2xl disable rounded-full right-[-15%] bottom-[-40%] bg-gray-500 absolute"></div>
          <div className="z-10 w-[60%]">
            <p className="headtext font-[acma-semi]">Community Spirit</p>
            <p className="subtext font-[absans]">
              Join a friendly community of developers where everyone helps each other grow and succeed.
            </p>
          </div>
          
            {/* <Spline className='absolute left-[40%] top-[10%]' scene="" /> */}
          
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center font-[absans] text-xl headtext">
              Do you want to start a project together?
            </p>
            {/* <CopyEmailButton /> */}
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText font-[acma-semi]">Developer Network</p>
            <p className="subtext font-[absans]">
              Connect with like-minded developers, share knowledge, and build lasting professional relationships in the tech community.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
