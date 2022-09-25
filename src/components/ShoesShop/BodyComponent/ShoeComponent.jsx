import React, { Component } from 'react'

export default class ShoeComponent extends Component {
    render() {
        let { id, image, name, price } = this.props.shoe;
        return (
            <div className="card shoe__item" style={{ width: '350px', marginTop: '30px' }}>
                <img className="card-img-top mx-auto" style={{ width: '85%' }} src={image} alt="" />
                <div className="card-body text-left">
                    <h4 className="card-title" style={{ fontSize: '22px' }}>{name}</h4>
                    <p className="card-text text-danger" style={{ fontSize: '20px' }}>{`$${price}`}</p>
                    <button onClick={() => {
                        this.props.shoeClick(id);
                    }} data-toggle="modal" data-target="#exampleModal" className='btn btn__add__cart'>more info <i className="bi bi-info-circle"></i></button>
                </div>
            </div>
        )
    }
}
