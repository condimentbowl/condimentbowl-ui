import React, { Component } from "react";
import playerFile from "./getAllPlayers.json"

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: {}
    };
  }

  render() {
    for (let [key, value] of Object.entries(playerFile)) {
      console.log(value.age);
    }

      return (
        <ul>
            <li key="123">
              boosh
            </li>
        </ul>
      );
  }
}

export default Players;