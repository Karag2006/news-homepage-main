import React from 'react'
import {topArticles} from '../assets/data.json'

const TopArticles = () => {
    return (
        <div className="topArticles">
            {topArticles.map((article) => (
                <div className="article" key={article.number}>
                    <img src={`/images/${article.picture}`} alt="" className="article--picture" />
                    <div className="article--preview">
                        <h2 className="article--number">{article.number}</h2>
                        <h3 className="article--title"><a href="">{article.title}</a></h3>
                        <p>{article.text}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default TopArticles