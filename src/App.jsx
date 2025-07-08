import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import First from "./sections/First"
import About from "./components/About"
import Loader from "./components/Loader"
import Features from "./components/Features"
import Members from "./components/Members"



gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      {/* <Loader/> */}
      {/* <First/> */}
      {/* <About/> */}
      {/* <Features/> */}
      <Members/>
      
    </main>
  )
}

export default App