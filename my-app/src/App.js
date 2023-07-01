import Navigasi from "./Components/Navigasi";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Cetak from "./Pages/Cetak";
import Invoice from "./Pages/Invoice";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cetak" element={<Cetak />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
