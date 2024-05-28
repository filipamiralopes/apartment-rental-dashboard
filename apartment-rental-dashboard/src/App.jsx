import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <Navbar/>
    <div class="landing-page">
      <Sidebar/>
      <div class="content">List of apartments to rent</div>
    </div>
    <Footer />
    </>
  )
}

export default App