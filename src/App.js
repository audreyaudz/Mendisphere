import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer"
import LoginMain from "./components/login/login-main";
import Catalogue from "./components/organisations/catalogue";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/org" element={<Catalogue />} />
        <Route path="/login" element={<LoginMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
