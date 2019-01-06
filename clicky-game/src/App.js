import React, { Component } from 'react';
import './App.css';
import ClickItem from "./ClickItem";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <ClickItem />
            <ClickItem />
            <ClickItem />
          </div>
          <div class="col-sm">
            <ClickItem />
            <ClickItem />
            <ClickItem />
          </div>
          <div class="col-sm">
            <ClickItem />
            <ClickItem />
            <ClickItem />
          </div>
          <div class="col-sm">
            <ClickItem />
            <ClickItem />
            <ClickItem />
          </div>

        </div>
      </div>

    );
  }
}

export default App;







