import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./list/List";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
