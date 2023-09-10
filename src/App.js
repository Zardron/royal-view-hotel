import React from "react";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// React Router
import { Route, Routes } from "react-router-dom/dist";
import OurRooms from "./pages/OurRooms";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/our-rooms" element={<OurRooms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
