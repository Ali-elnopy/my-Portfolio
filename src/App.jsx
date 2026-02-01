import ReactLenis from "lenis/react"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import Service from "./sections/Service"
import ServiceSummary from "./sections/ServiceSummary"

function App() {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto '>
      <NavBar />
      <Hero/>
      <ServiceSummary/>
      <Service/>
    </ReactLenis>
  )
}

export default App
