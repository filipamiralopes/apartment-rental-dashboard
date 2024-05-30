import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ApartmentList from "./pages/ApartmentList";
import { Routes, Route } from "react-router-dom";
import RentalDetail from "./pages/RentalDetail";
import { useState } from "react"
import rentalsData from "./assets/rentals.json"

function App() {
  const [rentals, setRentals] = useState(rentalsData.results)

  function handleDeleteUnit(unitId) { 
    const filteredRentals = rentals.filter((rental) => {
      if(rental.id !== unitId){
        return true
      } 
    })
    setRentals(filteredRentals)
  }

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Sidebar />
        {/* Routers */}
        <Routes>
          <Route path="/" element={<ApartmentList rentals={rentals} handleDeleteUnit={handleDeleteUnit}/>} />
          <Route path="/rentals" element={<ApartmentList rentals={rentals} handleDeleteUnit={handleDeleteUnit}/>} />
          <Route path="/rentals/:rentalId" element={<RentalDetail rentals={rentals} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
