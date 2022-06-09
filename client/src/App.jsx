import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser=()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method:'GET',
        credentials:"include",
        headers:{
          Accept:'application/json',
          "Content-type":"application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then(response=>{
        if(response.status===200){
          return response.json()
        }throw new Error("authentication has been failed")
      }).then(resObj=>{
        setUser(resObj)
      }).catch(err=>{
        console.log(err);
      })
    }
    getUser()
  }, [])
  
console.log(user?.user);
  return (
    <div className="App">
      <Navbar user={user?.user}/>
      <BrowserRouter>
    <Routes>
      <Route path="/"  element={user?<Home/>:<Login/>} />
      <Route path="/login"  element={user?<Home/>:<Login/>} />
      <Route path="/post" element={user?<Post/>:<Login/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
