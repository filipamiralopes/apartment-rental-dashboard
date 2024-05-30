import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ApartmentList from "./pages/ApartmentList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Sidebar />
        {/* Routers */}
        <Routes>
          <Route path="/" element={<ApartmentList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
