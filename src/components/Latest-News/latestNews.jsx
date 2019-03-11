import React from 'react'
import './latestNews.scss'

const LatestNews = () => {
    return(
        <div className="latestNews">
            <div className="latest-news-head">
                <h5 className="title">latest news</h5>
            </div>
            <div className="latest-news-list">
                <marquee width="100%" direction="left">
                    <span><a href="https://www.deccanherald.com/state/cm-launches-adi-jambava-713590.html" target="_blank">CM launches Adi Jambava Corporation</a></span>
                    <span><a href="https://www.deccanherald.com/state/cm-launches-adi-jambava-713590.html" target="_blank" href="">Chief Minister H D Kumaraswamy said that "The government would ensure justice to the Adi Jambava community."</a></span>
                </marquee>
            </div>
        </div>
    )
}

export default LatestNews;