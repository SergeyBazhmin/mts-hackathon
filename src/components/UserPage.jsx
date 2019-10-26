import React, { Component } from 'react'
import ava4 from '../img/ava4.png'
import Playlist from './Playlist'
import { API_URL } from '../constants'

export default class UserPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }

  async fetch_tracks(user) {
    let response = await fetch(`${API_URL}/${user}`, { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     })
    if (response.ok) {
      const playlists = await response.json();
      this.setState({
        playlists: this.state.playlists.concat(playlists)
      });
      console.log(playlists);
    } else {
      console.log('error');
    }
  }

  render() {
      return (
          <div class="col ml-3 mr-3">
              <div class="row mt-4">
                  <h1 class="display-4">
                      Моя музыка
                  </h1>
              </div>
              <div class="row d-flex align-items-center mt-4">
                  <img src={ava4} class="float-left user-img mr-4" />
                  <span class="align-middle user-name">Валерия<br/>Стромцова</span>
              </div>

              <div class="row mt-4">

                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link" id="track-tab" data-toggle="tab" href="#track" role="tab" aria-controls="track" aria-selected="true">Треки</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="album-tab" data-toggle="tab" href="#album" role="tab" aria-controls="album" aria-selected="false">Альбомы</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="artist-tab" data-toggle="tab" href="#artist" role="tab" aria-controls="artist" aria-selected="false">Исполнители</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" id="lists-tab" data-toggle="tab" href="#lists" role="tab" aria-controls="lists" aria-selected="false">Плейлисты</a>
                    </li>
                  </ul>
              </div>
              <div class="row mt-4">
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" id="track" role="tabpanel" aria-labelledby="track-tab">Здесь пока нет треков</div>
                    <div class="tab-pane fade" id="album" role="tabpanel" aria-labelledby="album-tab">Здесь пока нет альбомов</div>
                    <div class="tab-pane fade" id="artist" role="tabpanel" aria-labelledby="artist-tab">Здесь пока нет исполнителей</div>
                    <div class="tab-pane fade show active" id="lists" role="tabpanel" aria-labelledby="lists-tab">
                      <div class="row">
                          <div id='card-playlist-likes' class="card mr-3 ml-3" >
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <rect width="200" height="200" rx="4" fill="#F43232"/>
                              <rect x="36" y="38" width="128" height="128" fill="url(#pattern0)"/>
                              <defs>
                              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                              </pattern>
                              <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                              </defs>
                              </svg>

                            <div class="card-body">
                              <span class="card-title">Мне нравится</span><br/>
                              <span class="card-text">13 треков</span>
                            </div>
                          </div>

                          <div id='card-playlist-import' class="card" onClick={() => this.fetch_tracks('sbazhmin')}>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <rect x="1" y="1" width="198" height="198" rx="3" fill="white" stroke="#EFEFEF" stroke-width="2"/>
                              <rect x="36" y="43" width="128" height="128" fill="url(#pattern1)" fill-opacity="0.85"/>
                              <defs>
                              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                              <use xlinkHref="#image1" transform="scale(0.0078125)"/>
                              </pattern>
                              <image id="image1" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                              </defs>
                              </svg>

                            <div class="card-body">
                              <span class="card-title">Добавить треки</span><br/>
                              <span class="card-text">13 треков</span>
                            </div>
                          </div>
                      </div>
                      { this.state.playlists.map( playlist => (<Playlist playlistName= { playlist.title }/>)) }
                    </div>
                  </div>
              </div>
          </div>
      )
    }
}