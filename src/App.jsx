import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ApartmentList from "./pages/ApartmentList";
import { Routes, Route } from "react-router-dom";
import RentalDetail from "./pages/RentalDetail";
import { useState } from "react";
import rentalsData from "./assets/rentals.json";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import AddRental from "./pages/AddRental"
import EditRental from "./pages/EditRental";
import Favourites from "./pages/Favourites";

function App() {
  const [rentals, setRentals] = useState(rentalsData.results);
  const [favRentals, setFavRentals] = useState([]);

  function handleDeleteUnit(unitId) {
    const filteredRentals = rentals.filter((rental) => {
      if (rental.id !== unitId) {
        return true;
      }
    });
    setRentals(filteredRentals);
  }
  function handleAddToFavourites(unit) {
    setFavRentals([...favRentals, unit]);
  }

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Sidebar />
        {/* Routers */}
        <Routes>
          <Route
            path="/"
            element={
              <ApartmentList
                rentals={rentals}
                handleDeleteUnit={handleDeleteUnit}
                handleAddToFavourites={handleAddToFavourites}
                favRentals={favRentals}
              />
            }
          />
          <Route
            path="/rentals/:rentalId"
            element={<RentalDetail rentals={rentals} />}
          />
          <Route path="/edit-rental/:rentalId" element={<EditRental rentals={rentals} setRentals={setRentals}/>}/>
          <Route
            path="/add-rental"
            element={<AddRental rentals={rentals} setRentals={setRentals} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favRentals={favRentals}
                handleDeleteUnit={handleDeleteUnit}
                handleAddToFavourites={handleAddToFavourites}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
