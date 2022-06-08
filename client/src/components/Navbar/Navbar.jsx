import React from 'react'
import './Navbar.css'
function Navbar({user}) {
  return (
    <div className='navbar'>
        <span className='logo'>new app</span>
        <ul className='list'>
            <li className="listItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1dXcbGQTvqLXLBEQnr3S2ta1flJNUUc6kw&usqp=CAU" alt="" className="avatar" />
            </li>
            <li className="listItem">{user.usename}</li>
            <li className="listItem">Log Out</li>
        </ul>
    </div>
  )
}

export default Navbar