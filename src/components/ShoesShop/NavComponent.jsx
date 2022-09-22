import React, { Component } from 'react'
import './NavStyling/NavStyling.css'

export default class NavComponent extends Component {
    render() {
        return (
            <ul className="nav flex-column shoe__nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Shop</a>
                </li>
            </ul>
        )
    }
}
