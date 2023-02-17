import React, {useState} from 'react'

// sidebar menu
import sidebar from './data'

// components
import Header from './components/header'
import Nav from './components/nav'
import Banner from './components/banner'
import Section1 from './components/section1'
import Sidebar from './components/sidebar'
import Footer from './components/footer'

function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="App">
      <Header/>
      <div className='flex'>
        <Nav data={sidebar}/>
        <div className='w-100'>
          <Banner/>
          <Section1 setVisible={(e) => setVisible(e)}/>
          <div className='footer'>
            <Footer/>  
          </div>
        </div>
        <Sidebar isVisible={isVisible}/>
        <div className='sidebar'>
          <Footer/> 
        </div>
        
      </div>
    </div>
  )
}

export default App
