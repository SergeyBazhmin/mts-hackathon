import React, { Component } from 'react'
import ava4 from '../img/ava4.png'


export default class Playlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row mt-4 ml-5">
                <div class="card mb-3 w-100">
                    <div class="row no-gutters">
                        <div class="col-2">
                            <img src={ava4} class="card-img"/>
                        </div>
                        <div class="ml-5 mt-4">
                            <div class="row">
                                <div class="col">
                                    <h1 class="card-title"><strong>{this.props.playlistName}</strong></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}