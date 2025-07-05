import React, { useContext } from 'react'
import {Link,Routes,Route} from 'react-router';
import Home from './Pages/Home';
import Navbar from './Component/Navbar/Navbar';
import { DataContext } from './Manager/context';
import Contact from './Pages/Contact';
function App() {
 const {visible}=useContext(DataContext);
  return (
    <div className='relative'>
      <div className={`${visible?'bef':''} transition  duration-50 ease-in-out `}/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
