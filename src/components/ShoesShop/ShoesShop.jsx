import React, { Component } from 'react'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'
import NavComponent from './NavComponent'

export default class ShoesShop extends Component {
    render() {
        return (
            <div>
                <div className="row container-fluid">
                    <div className="col-md-3">
                        <NavComponent />
                    </div>
                    <div className="col-md-9">
                        <BodyComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}
