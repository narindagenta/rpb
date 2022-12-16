import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import { Home, Profile, Register, Login, Product, NotFound } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
