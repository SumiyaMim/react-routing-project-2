import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Navbar from '../components/Navbar';
import Protected from './Protected';

const App2 = () => {

    const [isLogin, setIsLogin] = useState(false)

  return (
    <BrowserRouter>
    <Navbar/>
    <div className='log'>
       {isLogin ? (
       <button onClick={()=>{setIsLogin(!isLogin)}}>Log Out{" "}</button> ) : (
       <button onClick={()=>{setIsLogin(!isLogin)}}>Login</button>)}
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* Protected Routing */}
        <Route path='/blogs' element={<Protected isLogin={isLogin}><Blogs/></Protected>}/>
        {/* route parameter */}
        <Route path='/blogs/:title' element={<Blog/>}/>  
        {/* Protected Routing */}
        <Route path='/contact' element={<Protected isLogin={isLogin}><Contact/></Protected>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App2
