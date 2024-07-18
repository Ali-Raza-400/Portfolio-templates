import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/home/Loader";
import "./assets/css/custom.css";
import "./assets/css/media-query.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import Cursor from "./components/common/Cursor.jsx";

function App() {
  return (
    <div className="App">
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Cursor />
    </div>
  );
}

export default App;
