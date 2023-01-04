import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/static_components/Navbar'
import Landing from './components/landing/Landing'
import Dropdown from './components/static_components/Dropdown'
import Footer from './components/static_components/Footer'
import './App.css'

function App() {
  const [dropdownState, setDropdownState] = useState(false)

  const Dropbox = () => {
    if (dropdownState == false) {
      console.log("On");
      setDropdownState(true)
    }
    else{
      console.log("Off");
      setDropdownState(false)
    }
  }
  return (
    <div className="App">
      <Navbar Dropbox={Dropbox} />
      <Dropdown enabled={dropdownState} />
      
      <Landing />
      <Footer />
    </div>
  )
}

export default App
