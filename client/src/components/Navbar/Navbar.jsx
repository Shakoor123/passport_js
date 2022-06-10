import React from 'react'
import './Navbar.css'
function Navbar(props) {
  const user=props.user
  console.log(user)
  const logout=()=>{
    window.open("http://localhost:5000/auth/logout","_self")
  }
  return (
    <div className='navbar'>
        <span className='logo'>new app</span>
        <ul className='list'>
            <li className="listItem">
             {user && <img src={user?.photos[0].value} className="avatar" />}
            </li>
               <li className="listItem">{user?.displayName || user?.username}</li>
            <li className="listItem" onClick={logout}>Log Out</li>
        </ul>
    </div>
  )
}

export default Navbar