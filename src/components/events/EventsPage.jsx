import React, { Component } from 'react'
import Event from './Event'
import foals from '../../img/foals.jpg'

export default class EventsPage extends Component {

    render() {
        return (
            <div class="col ml-3 mr-3">
                <div class="row mt-4">
                    <h1 class="display-4">
                        Events
                    </h1>
                </div>
                <div class="row mt-4">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">All concerts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" id="my-tab" data-toggle="tab" href="#my" role="tab" aria-controls="my" aria-selected="false">My concerts</a>
                        </li>
                    </ul>
                </div>
                <div class="row mt-4">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div class="container">
                            <div class="row">
                                <div class="card mb-3 w-100">
                                    <div class="row no-gutters">
                                        <div class="col-3">
                                            <img src="https://s3-alpha-sig.figma.com/img/ddfc/296a/b4935703c191f8d0526e1127ef4aec51?Expires=1572825600&Signature=Ythe-REHOBZNph2TAwBXXw1O6r0JViW1vn2QuocO7fC73ReLOWbLLYQag~dIc5ExGZTtR-pqFD11ZMGB-NLuYGjU7r5Puzx433xzW68XQ4FzbaHThp9767RmeVdXK-cGFJqG5zPIDHxbfpvilp1hiug5n-PnSXBYVroW8kH6d7t3p-KOLSl2x6dy0xpNl5qpCDFgKtbU2QqgG-WYjDJ4~KnsPm~fRQXtsACjgaNVNcK3VXzAuz31xHaR~3UmKW~dOJAvbkpF24jebq~YSGmoH6m6afCsS76fvl-uHwtyNsRgb10wLkz8uM4dxDHu6GEI5GeT1SJj3r0c6nETm6GV-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="card-img img-fluid" alt="..."/>
                                        </div>
                                        <div class="col-9">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="card-text" style={{fontSize: '24px'}}>3rd of November | Yubileyny Sports Palace</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <h1 class="card-title"><strong>Bring Me the Horizon</strong></h1>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <button type="button" class="btn btn-outline-danger btn-block btn-md">Buy ticket</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show active" id="my" role="tabpanel" aria-labelledby="my-tab">
                    <Event title="Bring me the horizon" text="3rd of November | Yubileyny Sports Palace" image="https://s3-alpha-sig.figma.com/img/ddfc/296a/b4935703c191f8d0526e1127ef4aec51?Expires=1572825600&Signature=Ythe-REHOBZNph2TAwBXXw1O6r0JViW1vn2QuocO7fC73ReLOWbLLYQag~dIc5ExGZTtR-pqFD11ZMGB-NLuYGjU7r5Puzx433xzW68XQ4FzbaHThp9767RmeVdXK-cGFJqG5zPIDHxbfpvilp1hiug5n-PnSXBYVroW8kH6d7t3p-KOLSl2x6dy0xpNl5qpCDFgKtbU2QqgG-WYjDJ4~KnsPm~fRQXtsACjgaNVNcK3VXzAuz31xHaR~3UmKW~dOJAvbkpF24jebq~YSGmoH6m6afCsS76fvl-uHwtyNsRgb10wLkz8uM4dxDHu6GEI5GeT1SJj3r0c6nETm6GV-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <Event title="The foals" text="29th of October | A2" image={foals}/>
                </div>
            </div>
        </div>
        )
    }
}