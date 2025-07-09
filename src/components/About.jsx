import { useGSAP } from "@gsap/react"
import Lightning from "../blocks/Backgrounds/Lightning/Lightning"
import gsap from "gsap"
import { useEffect,  useState } from "react"

const About = () => {
const [xOffset, setXoffset] = useState(0)
useGSAP(()=>{
  gsap.set('.fading', {
    opacity : 0,
    marginTop : '-150vh'
  })



  const tl = gsap.timeline({
    scrollTrigger : {
      trigger : '.fading',
      start : 'top top',
      end : '+=200% top',
      scrub :true,
      pin : true
    }
  })

  tl
  .to('.hero-section', {
    delay : 0.5,
    opacity : 0,
    ease : 'power1.inOut'
  })
  .to ('.fading', {
    opacity :1,
    duration : 2,
    ease : 'power1.inOut'
  })

  const tlTwo = gsap.timeline()
  tlTwo
  .to('.overlay', {
    opacity : 0,
    duration : 5,
    delay:2,
    ease : 'power1.inOut'
  })
  .to('.overlay',{
    opacity : 1,
    duration : 1,
    delay : 5,
    ease : 'power1.inOut'
  })
  .to('.overlay', {
    opacity : 0,
    duration : 5,
    delay:2,
    ease : 'power1.inOut'
  })
},[])


const hoizontalHandler = ()=>{
  
const xAxis = ((Math.random() * 4) - 2).toFixed(1)
setXoffset(xAxis)
}

useEffect(()=>{
  setInterval(()=>{
  hoizontalHandler()
}, 6000)
},[])

  return (
    <section className='w-full fading h-screen  relative'>
    <div id="light" className="w-full h-screen z-8 absolute bg-transparent">
    <Lightning xOffset={xOffset} />
    </div>
    {/* <div className="absolute w-full z-8 h-screen light"></div> */}
    <div className=" bg-transparent min-w-[70%] lightning  text-white h-[50vh] absolute   z-99999">
        <h2 className="font-bold font-[acma-black] text-7xl">
            Forge Your Future. 
        <br />
        Join Now
        </h2>
        <p className="font-[absans] mt-4 text-2xl">
Building innovative tech solutions through collaboration in web, mobile, 
cybersecurity, and more.
        </p>
    </div>
    {/* <div className="w-full overlay h-screen absolute bg-black z-9999"></div> */}
    </section>
  )
}

export default About