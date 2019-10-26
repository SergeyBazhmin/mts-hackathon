import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="card mb-3 w-100">
                        <div class="row no-gutters">
                            <div class="col-3">
                                <img src={this.props.image} class="card-img img-fluid" alt="..."/>
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="card-text" style={{fontSize: '20px'}}>{this.props.text}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <h1 class="card-title"><strong>{this.props.title}</strong></h1>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <svg class="ml-3" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect width="36" height="36" fill="url(#pattern0)"/>
                                            <defs>
                                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                                </pattern>
                                                <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                            </defs>
                                        </svg>
                                        <h5 class="ml-2">С кем пойти</h5>
                                        <svg class="ml-5" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect width="40" height="40" fill="url(#pattern1)"/>
                                            <defs>
                                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image1" transform="scale(0.0078125)"/>
                                                </pattern>
                                                <image id="image1" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                            </defs>
                                        </svg>
                                        <h5 class="ml-2 align-text-bottom">Открыть билет</h5>
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