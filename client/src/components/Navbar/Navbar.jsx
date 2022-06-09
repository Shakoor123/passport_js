import React from 'react'
import './Navbar.css'
function Navbar(props) {
  const user=props.user
  return (
    <div className='navbar'>
        <span className='logo'>new app</span>
        <ul className='list'>
            <li className="listItem">
               {user? <img src={user?.photos[0].value} className="avatar" />:""}
            </li>
            <li className="listItem">{user?.displayName}</li>
            <li className="listItem">Log Out</li>
        </ul>
    </div>
  )
}

export default Navbar