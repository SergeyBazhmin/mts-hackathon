import React, { Component } from 'react'
import lisa from '../../img/lisa.png'
import aha from '../../img/a-ha.png'
import gaga from '../../img/gaga.png'
import PointRow from './PointRow'

export default class PointsPage extends Component {

    render() {
        return (
            <div class="col ml-3 mr-3">
                <div class="row mt-4">  
                    <h1 class="display-4">
                        255 баллов
                    </h1>
                </div>
                <PointRow
                    image={lisa} 
                    topText="Merch / Clothes"
                    middleText="T-Shirt from Lisa" 
                    bottomText="Monetochka"
                    buttonText="Buy for 200 points"/>
                <PointRow
                    image={aha} 
                    topText="Concert / Discount" 
                    middleText="10% Discount" 
                    bottomText="a-ha" 
                    buttonText="Buy for 300 points" />
                <PointRow
                    image={gaga}
                    topText="Bonus" 
                    middleText="Sing Bad Romance in Karaoke" 
                    bottomText="Lady Gaga" 
                    buttonText="Get 100 points" />
            </div>
        )
    }
}