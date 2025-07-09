import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const Projects = () => {
  useGSAP(()=>{
    const split = new SplitText(".colla", { type: "chars" });
     const tl = gsap.timeline({scrollTrigger : {
      trigger : '.colla',
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space  bg-transparent section-spacing"
    >
      <h2 className="text-7xl project-title font-[acma-black] colla ">Collaborative Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-contain  h-56 rounded-lg shadow-lg pointer-events-none w-80"
          
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
