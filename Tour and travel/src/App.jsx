
import Destinantion from './Component/Pages/Destinantion'
import {  Route, Routes } from 'react-router-dom'
import Nav from './Component/Pages/Nav'
import Home from './Component/Pages/Home'
// import Layer from './Component/Pages/Layer'
import Layer from './Component/Pages/Layer'
import Footer from './Component/Pages/Footer'
function App() {
  return(
  <>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Destinantion' element={<Destinantion/>}/>
    {/* <Route path='/Layer' element={<Layer/>}/> */}
    <Route path='/Layer' element={<Layer/>}/>
        <Route path='/Footer' element={<Footer/>}/>

  </Routes>

  {/* <Destinantion/> */}
  </>
  )
}

export default App
