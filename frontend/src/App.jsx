import './index.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Academics from './pages/Academics'
import GovSection from './pages/GovSection'
import Internship from './pages/Internship'
import Opportunities from './pages/Opportunities'
import PersonalGuide from './pages/PersonalGuide'
import Placement from './pages/Placement'
import SkillDevelopment from './pages/SkillDevelopment'
import Society from './pages/Society'
import { Suspense } from 'react'
import Spinner from './loaders/Spinner-avanish'
import HomePage from './pages/HomePage'
import News from './pages/News'
import Feedback from './pages/Feedback'


function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' index element={<HomePage/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
        <Route path='/gov' element={<GovSection/>}></Route>
        <Route path='/intern' element={<Internship/>}></Route>
        <Route path='/opportunities' element={<Opportunities/>}></Route>
        <Route path='/personalguide' element={<PersonalGuide/>}></Route>
        <Route path='/placement' element={<Placement/>}></Route>
        <Route path='/skilldev' element={<SkillDevelopment/>}></Route>
        <Route path='/skilldev' element={<Society/>}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
