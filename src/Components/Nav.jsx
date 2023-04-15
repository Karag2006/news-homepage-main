import React from 'react'

const Nav = ({classes}) => {
  return (
    <nav className={classes}>
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  )
}

export default Nav