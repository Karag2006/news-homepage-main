import React, { useState } from 'react'
import {MainArticle, News} from './'
import {newsArticles, mainArticle} from '../assets/data.json'

const MainContent = () => {

    return (
        <div className="mainContent">
            <MainArticle article={mainArticle} />
            <News articles={newsArticles} />
        </div>
    )
}

export default MainContent