import React from 'react'
import './Post.css'
function Post() {
  return (
    <div>
        <div className="post">
            <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg" alt="" className="postImg" />
            <h1 className="postTitle">post title</h1>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at suscipit voluptatibus recusandae, cumque totam! Accusantium ad blanditiis perspiciatis ab in a sit vel aperiam, et magnam voluptatem numquam cumque non quis consectetur assumenda porro id quia! Iure magni vero, rerum esse possimus non dolor consequatur nisi dicta animi deleniti!</p>
        </div>
    </div>
  )
}

export default Post