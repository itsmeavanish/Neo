
import './index.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Spinner from './loaders/Spinner-avanish'
import HomePage from './pages/HomePage'



function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' index element={<HomePage/>}></Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
/*
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
 */