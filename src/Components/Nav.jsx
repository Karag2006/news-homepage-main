import React from 'react'

const Nav = ({classes}) => {
  return (
    <nav className={classes}>
      <ul>
        
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </nav>
  )
}

export default Nav