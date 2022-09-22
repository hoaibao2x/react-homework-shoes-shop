import React, { Component } from 'react'
import './BodyStyling/BodyStyling.css'

export default class BodyComponent extends Component {

    shoesList = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]

    state = {
        myCart: []
    }

    renderShoesList = () => {
        return this.shoesList.map((shoe) => {
            let { id, image, name, price } = shoe;
            return <div className="col-md-4" key={`shoe-${id}`}>
                <div className="card shoe__item" style={{width: '350px', marginTop: '30px'}}>
                    <img className="card-img-top mx-auto" style={{width: '85%'}} src={image} alt="" />
                    <div className="card-body text-left">
                        <h4 className="card-title" style={{fontSize: '22px'}}>{name}</h4>
                        <p className="card-text text-danger" style={{fontSize: '18px'}}>{`$${price}`}</p>
                        <button onClick={() => {
                            this.addToCart(shoe)
                        }} data-toggle="modal" data-target="#exampleModal" className='btn btn__add__cart'>Add to cart <i className='bi bi-cart4'></i></button>
                    </div>
                </div>
            </div>
        })
    }

    renderCart = () => {
        return this.state.myCart.map((shoe) => {
            let { id, image, name, price, soLuong } = shoe;
            return <tr key={`cart-${id}`}>
                <td className='td__item'>{`SHOE-0${id}`}</td>
                <td>
                    <img style={{ 'width': '70px' }} src={image} alt="" />
                </td>
                <td className='td__item'>{name}</td>
                <td className='td__item'>
                    <button onClick={() => {
                        this.changeQuantity(id, 1)
                    }} className='btn btn-success'>+</button>
                    <span style={{margin: '0 10px'}}>{soLuong}</span>
                    <button onClick={() => {
                        this.changeQuantity(id, -1)
                    }} className='btn btn-secondary'>-</button>
                </td>
                <td className='td__item'>{`$${price}`}</td>
                <td className='td__item'>{`$${(price * soLuong).toLocaleString() }`}</td>
                <td className='td__item'>
                    <button onClick={() => {
                        this.removeItem(id)
                    }} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                </td>
            </tr>
        })
    }

    addToCart = (shoeClick) => {
        let cartUpdate = [...this.state.myCart];
        let shoeFind = this.state.myCart.find((shoeInCart) => {
            return shoeClick.id === shoeInCart.id;
        })

        if (shoeFind) {
            shoeFind.soLuong = shoeFind.soLuong + 1;
        } else {
            let newShoe = { ...shoeClick, soLuong: 1 };
            cartUpdate.push(newShoe);
        }
        this.setState({
            myCart: cartUpdate
        })
    }

    removeItem = (idRemove) => {
        let cartUpdate = [...this.state.myCart];
        let idCheck = cartUpdate.findIndex((shoeInCart) => {
            return shoeInCart.id === idRemove; 
        })

        if (idCheck !== -1) {
            cartUpdate.splice(idCheck, 1);
        }

        this.setState({
            myCart: cartUpdate
        })
    }

    changeQuantity = (shoeID, quantity) => {
        let cartUpdate = [...this.state.myCart];
        let shoeFind = cartUpdate.find((shoeInCart) => {
            return shoeInCart.id === shoeID;
        })

        if (shoeFind) {
            shoeFind.soLuong = shoeFind.soLuong + quantity;

            if (shoeFind.soLuong < 1) {
                alert('Minimum item must greater than or equal to 1 !');
                shoeFind.soLuong -= quantity;
            }
        }

        this.setState({
            myCart: cartUpdate
        })
    }

    render() {
        return (
            <div className="body__content">
                <h2 className='text-white mt-2'>Shoe Shop</h2>
                <div className="row">
                    {this.renderShoesList()}
                </div>

                <div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Shoe Cart</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead className='bg-dark text-white'>
                                            <tr>
                                                <th>Mã</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderCart()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
