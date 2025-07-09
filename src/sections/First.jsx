import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Second from "./Second"

const Hero = () => {
 

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: "50% 45%",
      maskSize: "8100% 8100%",
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { 
        maskPosition : "50% 50%",
        maskSize : "40% 40%", ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      // .to('.overlay-logo', { opacity: 1, duration :0.1, onComplete: () => {
      //   gsap.to('.overlay-logo', { opacity: 0, duration:0.1 });
      // } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<')
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/new_img.jpeg" alt="background" className="scale-out w-full" />
        
        
      </div>

      

      

      <Second />
    </section>
  )
}

export default Hero