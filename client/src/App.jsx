import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [user, setUser] = useState(false)

  return (
    <div className="App">
      <Navbar user={user}/>
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/login"  element={user?<Home/>:<Login/>} />
      <Route path="/post" element={user?<Post/>:<Login/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
