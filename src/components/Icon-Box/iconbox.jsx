import React from 'react'
import '../Icon-Box/iconbox.scss'

const Iconbox = (props) => {
    return(
        <div className="icon-box">
            <img src={props.image} alt="" className="iconimg"/>
            <div className="icon-content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Iconbox;