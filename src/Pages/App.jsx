import React from 'react'

const App = () => {
  return (
    <main>
  
  <div className="content">
    <div className="content--focus">
      <img src="" alt="Main Article Picture" className="content--focus-image" />
      <div className='mainArticle'>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
    But is it really fulfilling its promise?</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
    <aside>
      <h2>New</h2>
      <div className="aside--article">
        <h3>
          Hydrogen VS Electric Cars
        </h3>
        <p>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="aside--article"></div>
      <div className="aside--article"></div>
    </aside>
  </div>
  <div className="topArticles">
    <div className="article">
      <img src="" alt="" className="article--picture" />
      <div className="article--preview">
        <h2 className="article--number">01</h2>
        <h3 className="article--title">
          Reviving Retro PCs
        </h3>
        <p>
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
  </div>
 </main>
  )
}

export default App
