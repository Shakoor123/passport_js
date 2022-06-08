import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card col'>
        <span className='title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nam.</span>
        <img src="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.jpg" alt="" className="img" />
        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error obcaecati quisquam sit laudantium illo, quidem eius numquam facere. Nisi sequi deserunt ducimus ea? Velit culpa, iusto animi perferendis quis nesciunt.</p>
        <button className="cardButton">Read_More</button>
    </div>
  )
}

export default Card