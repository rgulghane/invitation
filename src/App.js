import "./App.css";
import Balloon from "./components/Balloon";
import Envelope from "./components/Envelope";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Envelope />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Envelope />} />
        {/* <Route path="balloon" element={<Balloon />} /> */}
        <Route path="*" element={<Envelope />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
