import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ApartmentList from './components/ApartmentList'

function App() {

  return (
    <>
    <Navbar/>
    <div className="landing-page">
      <Sidebar/>
      {/* Routers */}
      <ApartmentList/>
    </div>
    <Footer />
    </>
  )
}

export default App