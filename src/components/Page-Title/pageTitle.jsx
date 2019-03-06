import React from 'react'
import './pageTitle.scss'

const PageTitle = (props) => (
    <div className="page-title">
        <h2 className="title">{props.children}</h2>
    </div>
)

export default PageTitle;