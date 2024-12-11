import './App.css'
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Academics from './pages/Academics'
import GovSection from './pages/GovSection'
import Internship from './pages/Internship'
import Opportunities from './pages/Opportunities'
import PersonalGuide from './pages/PersonalGuide'
import Placement from './pages/Placement'
import SkillDevelopment from './pages/SkillDevelopment'
import Society from './pages/Society'


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
        <Route path='/gov' element={<GovSection/>}></Route>
        <Route path='/intern' element={<Internship/>}></Route>
        <Route path='/opportunities' element={<Opportunities/>}></Route>
        <Route path='/personalguide' element={<PersonalGuide/>}></Route>
        <Route path='/placement' element={<Placement/>}></Route>
        <Route path='/skilldev' element={<SkillDevelopment/>}></Route>
        <Route path='/skilldev' element={<Society/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
