import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, Tech, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patten bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Tech />
          <Works/>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
} 

export default App
