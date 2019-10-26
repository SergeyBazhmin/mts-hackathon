import React, { Component } from 'react'


export default class PointRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="row">
                <div class="card mb-3 w-100">
                    <div class="row no-gutters">
                        <div class="col-2">
                            <img src={this.props.image} class="card-img" />
                        </div>
                        <div class="col-10">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <p class="card-text" style={{fontSize: '24px'}}>{this.props.topText}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <h1 class="card-title"><strong>{this.props.middleText}</strong></h1>
                                    </div>
                                    <div class="col-md-4">
                                        <button type="button" class="btn btn-danger btn-block btn-md">{this.props.buttonText}</button>
                                    </div>
                                </div>
                                <div class="row mb-0">
                                    <div class="col-md-8">
                                        <p class="card-text text-muted">{this.props.bottomText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}