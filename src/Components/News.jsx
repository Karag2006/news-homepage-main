import React from 'react'

const News = ({articles}) => {
    return (
        <aside>
            <h2>New</h2>
            {articles.map((article) => (
                <div className="aside--article" key={article.title}>
                    <h3><a href="#">{article.title}</a></h3>
                    <p>{article.text}</p>
                </div>
            ))}
        </aside>
    )
}

export default News