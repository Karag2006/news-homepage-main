import React, {useState, useEffect} from 'react'

const MainArticle = ({article}) => {
    const breakpoint = 700;
    const [displayImage, setDisplayImage] = useState(article.mobilePicture);
    useEffect(() => {
        const handleResizeWindow = () => {
            if (window.innerWidth > breakpoint) {
                return setDisplayImage(article.desctopPicture)
            }
            return setDisplayImage(article.mobilePicture)
        };
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow)
        };
    }, []);

    return (
        <div className="content--focus">
            <img src={`/images/${displayImage}`} alt="Main Article Picture" className="content--focus-image" />
            <div className='mainArticle'>
                <h1>{article.title}</h1>
                <div>
                <p>{article.text}</p>
                <button>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default MainArticle