
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface ChromaItem {

  title: string;
  subtitle: string;
  techStack?: string;
  handle?: string;
 
  borderColor?: string;
  gradient?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  portfolioUrl?: string;
  description? : string;
}

export interface GradientCardsProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const GradientCards: React.FC<GradientCardsProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
     const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  

  const demo: ChromaItem[] = [
    {
      
      title: "Raman Mann",
      subtitle: "Co - Founder",
      handle: "@zeroxv6",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      techStack : 'Kotlin | Python | MySql | CyberSec'
    },
    {
      
      title: "Deepanshu Sharma",
      subtitle: "Co - Founder",
      handle: "@DeepanshuSharma",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      description : 'A full-stack web developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js. ',
      techStack : 'MERN | Python | MySql '
    },
    {
      
      title: "Divyanshu Sindhu",
      subtitle: "Tech Lead",
      handle: "@DivyanshuSindhu09 ",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      portfolioUrl :'https://divyanshu-sindhu.forgedinsyntax.club/',
      githubUrl : 'https://github.com/DivyanshuSindhu09',
      linkedInUrl : 'https://www.linkedin.com/in/divyanshu-sindhu-32b71632b/',
      description : 'Blending code and creativity to craft visually stunning, interactive, and meaningful digital experiences.',
      techStack : 'React | ThreeJS | GSAP'
    },
    {
      title: "Kartavya",
      subtitle: "Data Scientist",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      techStack : 'Python | AI/ML | Video Editing'
    },
    {
      
      title: "Dhruv Gautam",
      subtitle: "Mobile Developer",
  
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      
      techStack :'Python'
    },
    {
      
      title: "Manya Sharma",
      subtitle: "Cloud Architect",
     
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      
      techStack : 'Python (Pandas, Numpy) | SQL'
    },
    {
      
      title: "Chirag",
      subtitle: "Web Developer",
     
      
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      
      description:'Professional app developer building reliable, high-performance mobile and web applications with clean, maintainable code.',
      techStack : 'HTML | CSS | JS | PYTHON | SQL | C/C++'
    },

    {
      
      
      title: "Tanishk Thukral",
      subtitle: "Frontend Developer",
      handle: "@DivyanshuSindhu09 ",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      
      description : 'Blending code and creativity to craft visually stunning, interactive, and meaningful digital experiences.',
      techStack : 'HTML | CSS | JS'
    },
    {
      
      title: "Toshit Tandon",
      subtitle: "Backend Developer",

      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
      
      techStack : 'Python | Java | JavaScript'
    },
    {
      
      title: "Rubayat Tahsin",
      subtitle: "Backend Developer",
    
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
      
      techStack :'Python | Django | MongoDB | TypeScript'
    },
    {
      
      title: "Nabin Tharu",
      subtitle: "Cyber Security",

      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg,#06B6D4,#000)",
      
      techStack : 'Python | CyberSec'
    },
    {
      
      title: "Anshika Verma",
      subtitle: "App Developer",
 
      
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      
      description:'Professional app developer building reliable, high-performance mobile and web applications with clean, maintainable code.',
      techStack : 'KOTLIN | PYTHON | SQL '
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

// const mouseEnterHandler = (index : number)=>{
//    const el = cardRefs.current[index];
//     if (el) {
//       gsap.to(el, {
//         scale: 1.05,
//         // rotate: 2,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
// }

const handleCardEnter = (index: number) => {
  const cardEl = cardRefs.current[index];
  const imgEl = imageRefs.current[index];

  if (cardEl) {
    gsap.to(cardEl, {
      // scale: 1.05,
      // rotate: 2,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  }

  if (imgEl) {
    gsap.to(imgEl, {
      y: 0,
      scale :1,
      opacity : 0.6,
      duration: 0.5,
      ease: "power3.out",
    });
  }
};

const handleCardLeave = (index: number) => {
  const cardEl = cardRefs.current[index];
  const imgEl = imageRefs.current[index];

  if (cardEl) {
    gsap.to(cardEl, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }

  if (imgEl) {
    gsap.to(imgEl, {
      y: "-100%",
      duration: 0.5,
      ease: "power3.in",
    });
  }
};

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };


  // const handleCardLeave = (index: number) => {
  //   const el = cardRefs.current[index];
  //   if (el) {
  //     gsap.to(el, {
  //       scale: 1,
  //       rotate: 0,
  //       duration: 0.3,
  //       ease: "power2.inOut",
  //     });
  //   }
  // };

  // const handleCardClick = (url?: string) => {
  //   if (url) window.open(url, "_blank", "noopener,noreferrer");
  // };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full flex flex-wrap justify-center py-10 bg-transparent items-start gap-8 ${className}` }
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
        
          key={i}
          // id="article"
          ref={(el) => {cardRefs.current[i] = el}}
          onMouseEnter={()=>handleCardEnter(i)}
          onMouseLeave={() => handleCardLeave(i)}
          onMouseMove={handleCardMove}
          // onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[350px] px-4 py-2 rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 "
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
         
    <img
      ref={(el) => {imageRefs.current[i] = el}}
      src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
      alt={c.title}
      
      className="w-full opacity-0 h-full object-cover absolute scale-0 top-0 left-[20%]"
      style={{ transform: "translateY(-100%)" }}
    />
 
          <div
          
            className=" absolute inset-0 min-h-full w-full pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div
          id="article"
          className="relative  w-full  z-10 flex-1 p-[10px] box-border">
            {/* <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px]"
            /> */}
          </div>
          <footer className="relative w-full  z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.5rem] font-[acma-black]">{c.title}</h3>
            {/* {c.handle && (
              <span className="text-[0.95rem] font-[absans] mt-1 opacity-80 text-right">
                {c.handle}
              </span>
            )} */}
            <br />
            <p className="m-0 text-[1.2rem] font-[acma-semi] opacity-85">{c.subtitle}</p>
            {/* {c.location && (
              <span className="text-[0.85rem] opacity-85 text-right">
                {c.location}
              </span>
            )} */}
            {c.techStack && (
  <div className="col-span-2 mb-10 mt-2">
    <p className="text-[1.02rem] font-[absans] leading-tight opacity-100">{c.techStack.toUpperCase()}</p>
  </div>
)}
<br />
<div className="w-full text-3xl  flex justify-between gap-10 absolute bottom-0">
  <a target="blank" href={`${c.githubUrl}`}> <i className="ri-github-fill"></i> </a>
  <a target="blank" href={`${c.linkedInUrl}`}> <i className="ri-linkedin-box-fill"></i></a>
  <a target="blank" href={`${c.twitterUrl ? c.twitterUrl : ''}`}> <i className="ri-twitter-x-line"></i></a>
  <a target="blank" href={`${c.portfolioUrl}`}> <i className="ri-global-line"></i></a>
  </div>
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default GradientCards;
