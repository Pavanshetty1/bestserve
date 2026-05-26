import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import AboutDetails from "./components/AboutDetails";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollToTop";
import Clients from "./components/Client";
import Industries from "./components/Industries";
import IndustriesPage from "./components/IndustriesPage";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* HOME PAGE */}

        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Clients />
              <Services />
              <Industries />
            </>
          }
        />

        {/* ABOUT PAGE */}

        <Route path="/aboutdetails" element={<AboutDetails />} />
        <Route path="/servicespage" element={<ServicePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
      <Contact />
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
