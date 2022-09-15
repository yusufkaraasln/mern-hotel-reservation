import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import List from "./list/List";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(state=>state.auth.user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={ 
          user ? <Navigate to={"/"} /> : <Login/>
        } />
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
}

export default App;
