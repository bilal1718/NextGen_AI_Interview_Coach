import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MyFooter from './components/Footer'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import CallToAction from './components/CallToAction'

function App() {

  return (
    <>
     <Navbar />
     <Home />
     <Features />
     <CallToAction />
     <HowItWorks />
     <MyFooter />
    </>
  )
}

export default App
