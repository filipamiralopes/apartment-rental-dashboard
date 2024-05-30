import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ApartmentList from './components/ApartmentList'
import { Route, Routes } from 'react-router'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
    <Navbar/>
    <div className="landing-page">
      <Sidebar/>
      {/* Routers */}
      <Routes>
        <Route path='/about' element={<AboutPage/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
      <ApartmentList/>
    </div>
    <Footer />
    </>
  )
}

export default App