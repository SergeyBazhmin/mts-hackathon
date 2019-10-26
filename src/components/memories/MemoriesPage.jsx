import React, { Component } from 'react'
import Memory from './Memory'

export default class MemoriesPage extends Component {

    render() {
        return (
            <div class="col ml-3 mr-3">
                <div class="row mt-4">
                    <h1 class="display-4">
                        Memories
                    </h1>
                </div>
                <Memory title="Your year 2015" text="Remember what you were listening to 4 years ago." buttonText="Listen"/>
                <Memory title="Autumn mix" text="Songs that you enjoy when the leaves are yellow" buttonText="Listen"/>
                <Memory title="Back to 2007" text="Go back in time to 2007!" buttonText="Listen"/>
            </div>
        )
    }
}