import React, { Component } from 'react'
import ShoeComponent from './ShoeComponent';

export default class ShoeListComponent extends Component {

    renderShoesList = () => {
        return this.props.shoesList.map((shoe) => {
            let { id } = shoe;
            return <div className="col-md-4" key={`shoe-${id}`}>
                <ShoeComponent shoe={shoe} shoeClick={this.props.shoeClick} />
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoesList()}
            </div>
        )
    }
}
