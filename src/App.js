import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NasaPhoto } from "./components/NasaPhoto";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nasaphoto" element={<NasaPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
