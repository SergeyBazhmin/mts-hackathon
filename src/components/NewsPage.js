import React, { Component } from 'react'


export default class NewsPage extends Component {
    render() {
        return (
            <div class="col ml-3 mr-3">
                <div class="row mt-2">
                    <div class="card mb-3 w-100">
                        <div class="row no-gutters">
                            <img src="https://avatars.yandex.net/get-music-content/2399641/0642dd6f.a.9070622-1/200x200" class="story"/>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="card mb-3 w-100">
                        <div class="row no-gutters">
                            <div class="col-3">
                                <img src="https://s3-alpha-sig.figma.com/img/ddfc/296a/b4935703c191f8d0526e1127ef4aec51?Expires=1572825600&Signature=Ythe-REHOBZNph2TAwBXXw1O6r0JViW1vn2QuocO7fC73ReLOWbLLYQag~dIc5ExGZTtR-pqFD11ZMGB-NLuYGjU7r5Puzx433xzW68XQ4FzbaHThp9767RmeVdXK-cGFJqG5zPIDHxbfpvilp1hiug5n-PnSXBYVroW8kH6d7t3p-KOLSl2x6dy0xpNl5qpCDFgKtbU2QqgG-WYjDJ4~KnsPm~fRQXtsACjgaNVNcK3VXzAuz31xHaR~3UmKW~dOJAvbkpF24jebq~YSGmoH6m6afCsS76fvl-uHwtyNsRgb10wLkz8uM4dxDHu6GEI5GeT1SJj3r0c6nETm6GV-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="card-img img-fluid" alt="..." />
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="card-text" style={{fontSize: '24px'}}>Upcoming concert</p>
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
                                    <div class="row mb-0">
                                        <div class="col-md-8">
                                            <p class="card-text text-muted">3rd of November | Yubileyny Sports Palace</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p class="card-text text-muted text-center">10% discount for 30 points!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card mb-3 p-3 w-100">
                        <div class="row no-gutters">
                            <div class="col-2">
                                <img src="https://avatars.yandex.net/get-music-content/2399641/0642dd6f.a.9070622-1/200x200" class="card-img" />
                            </div>
                            <div class="col-9 offset-1" >
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="card-text" style={{fontSize: '24px'}}>New release</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <h1 class="card-title"><strong>JESUS IS KING</strong></h1>
                                        </div>
                                        <div class="col-md-4">
                                            <button type="button" class="btn btn-danger btn-block btn-md">
                                                Listen
                                                <svg class="ml-2" width="12" height="14" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 -8.94676e-07 17.4678 -8.27378e-07 15.9282L-2.21695e-07 2.0718C-1.54397e-07 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z" fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row mb-0">
                                        <div class="col-md-8">
                                            <p class="card-text text-muted">Kanye West | Foreign rap & hip-hop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card mb-3 p-3 w-100">
                        <div class="row no-gutters">
                            <div class="col-2">
                                <img src="https://pbs.twimg.com/profile_images/1148663897538224129/DIod8cN8_400x400.jpg" class="card-img" style={{borderRadius: '100px'}}/>
                            </div>
                            <div class="col-9 offset-1" >
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="card-text text-muted">@ladygaga on Twitter | 16 Oct</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8 pt-2">
                                            <h3 class="card-title">What's fortnite</h3>
                                        </div>
                                        <div class="col-md-4">
                                            <button type="button" class="btn btn-primary btn-block btn-md">
                                                Open on Twitter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }   
}