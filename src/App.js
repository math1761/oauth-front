import React, { Component } from "react";
import io from 'socket.io-client';
import { API_URL } from './config';
import OAuth from './OAuthPopup';
import "./App.css";
import "./bootstrap.min.css";

const socket = io(API_URL)
const providers = ['instagram']

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramCode: ''
    }
  }
  render() {
    return (
      <div className="App">
      {providers.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              socket={socket}
            />
          )}
      </div>
    );
  }
}

export default App;
