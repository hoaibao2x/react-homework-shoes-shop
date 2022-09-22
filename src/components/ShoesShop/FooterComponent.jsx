import React, { Component } from 'react'
import './FooterStyling/FooterStyling.css'

export default class FooterComponent extends Component {
    render() {
        return (
            <div className='shoe__footer'>
                <div className="footer__socials">
                    <a className='socials__link' href="#">
                        <i className="bi bi-facebook" />
                    </a>
                    <a className='socials__link' href="#">
                        <i className="bi bi-instagram" />
                    </a>
                    <a className='socials__link' href="#">
                        <i className="bi bi-twitter" />
                    </a>
                </div>
                <div className="footer__faq">
                    <div className="faq__top">
                        <a href="#">Info</a>
                        <a href="#">Support</a>
                        <a href="#">Marketing</a>
                    </div>
                    <div className="faq__bottom">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <span>© 2022 Shoe Shop</span>
                    </div>
                </div>
            </div>
        )
    }
}
