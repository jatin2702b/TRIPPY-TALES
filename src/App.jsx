import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Destinations } from './components/Destinations'
import { Packages } from './components/Packages'
import { Gallery } from './components/Gallery'
import { About } from './components/about'
import { Contact } from './components/Contact'
import { FloatingActions } from './components/FloatingActions'
import { Chatbot } from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Gallery />
      <About />
      <Contact />
      <FloatingActions />
      <Chatbot />
    </div>
  )
}

export default App
