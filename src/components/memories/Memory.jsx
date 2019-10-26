import React, { Component } from 'react'

export default class Memory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div class="card mb-4 mt-4 w-100">
                    <div class="row no-gutters">
                        <div class="col-3">
                            <svg class="card-img" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="128" height="128" fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                </defs>
                            </svg>
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h1 class="card-title">{this.props.title}</h1>
                                <p class="card-text">
                                    {this.props.text}
                                </p>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card-body">
                            <button type="button" class="btn btn-danger btn-block btn-md mt-4">
                                {this.props.buttonText}
                                <svg class="ml-2" width="12" height="14" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z" fill="white"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}