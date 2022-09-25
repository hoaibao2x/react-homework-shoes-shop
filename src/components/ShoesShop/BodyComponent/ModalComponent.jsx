import React, { Component } from 'react'

export default class ModalComponent extends Component {
    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Shoe Detail</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.renderDetail()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
