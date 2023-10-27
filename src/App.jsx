import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Maincontent from './Components/Contactpage/Maincontent'
import ContactHeader from './ContactHeader/ContactHeader'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navigation/>
       <main className='main_container'>
       <ContactHeader/>
       <Maincontent />
       </main>
    </div>
  )
}

export default App