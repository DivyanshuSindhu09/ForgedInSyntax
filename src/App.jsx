import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import First from "./sections/First"
import Projects from "./sections/Projects"
import About from "./components/About"
import Loader from "./components/Loader"
import Features from "./components/Features"
import Members from "./components/Members"



gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Loader/>
      <First/>
      {/* <About/> */}
      <Features/>
      <Members/>
      <Projects/>
    </main>
  )
}

export default App