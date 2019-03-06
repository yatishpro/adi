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
                    <span>First News consectetur adipisicing elit. Quasi, suscipit.</span>
                    <span>Second News consectetur adipisicing elit. Quasi, suscipit.</span>
                    <span>Third News consectetur adipisicing elit. Quasi, suscipit.</span>
                    <span>Four News consectetur adipisicing elit. Quasi, suscipit.</span>
                </marquee>
            </div>
        </div>
    )
}

export default LatestNews;