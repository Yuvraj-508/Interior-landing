import React from 'react'
import {Link,Routes,Route} from 'react-router';
import Home from './Pages/Home';
import Navbar from './Component/Navbar/Navbar';
function App() {
  return (
    <div className='relative'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  )
}

export default App
