import React, { Component } from 'react'
import Memory from './Memory'
import lisa from '../../img/lisa.png'
import aha from '../../img/a-ha.png'
import gaga from '../../img/gaga.png'

export default class MemoriesPage extends Component {

    render() {
        return (
            <div class="col ml-3 mr-3">
                <div class="row mt-4">  
                    <h1 class="display-4">
                        255 баллов
                    </h1>
                </div>
                <Memory
                    image={lisa} 
                    topText="Merch / Clothes"
                    middleText="T-Shirt from Lisa" 
                    bottomText="Monetochka"
                    buttonText="Buy for 200 points"/>
                <Memory
                    image={aha} 
                    topText="Concert / Discount" 
                    middleText="10% Discount" 
                    bottomText="a-ha" 
                    buttonText="Buy for 300 points" />
                <Memory
                    image={gaga}
                    topText="Bonus" 
                    middleText="Sing Bad Romance in Karaoke" 
                    bottomText="Lady Gaga" 
                    buttonText="Get 100 points" />
            </div>
        )
    }
}