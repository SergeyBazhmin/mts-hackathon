import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ava from '../img/ava.png'
import coin from '../img/coin.png'
import like from '../img/like.png'
import photography from '../img/photography.png'
import rnr from '../img/rock-and-roll.png'

export default class SideBar extends Component { 
    render() {
        return (
            <div class="col-3 pl-0 pr-0 sidebar" style={{minWidth: '150px' }}>
                <div class="sidebar-header">
                    <img src="https://s3-alpha-sig.figma.com/img/f7e8/875d/10abff05672269e7bafd1d7c4f816217?Expires=1572825600&Signature=BeEjew~lM-CRKK03m~yIF1za6jfpjfvX3eCQWmfMoOc-0CqptC-TjMV~hbcsXBXQ2d3n7kbuta8k17GoIWPgRk4CjFdflMfGRnBe2bPDLqMViJeXvetAjEflkCmIBKkqBb5xbfgYFiIY4H3Ta8k9K2QupGdP82PdXZQFxah4xymBMkT9fvnFZ~5BHtJQirSuQZUoToIK4KfhVkIDGvi3Vw18CmFnwDgJlyLrFY5336Gsc4yL3SzwS1snaejKJ68EAUpMd5Eqz3vXQnFUH9REdwDvtImoSeIs9~PIVLghICFfSega0oKF~8~5PmDza8b5iEpUFPb3lMndyPB22i0wWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                </div>
                    <nav>
                        <ul class="nav flex-column list-unstyled components" id='menu'>
                            <li class="nav-item">
                                <Link to="/me"><img src={ava} class="icon" style={{borderRadius: '100px' }} />My music</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/points"><img src={coin} class="icon" />225 points</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/"><img src={like} class="icon" />For you</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/memories"><img src={photography} class="icon" />Memories</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/events"><img src={rnr} class="icon" />Events</Link>
                            </li>
                        </ul>
                    </nav>
            </div>)
        }
}