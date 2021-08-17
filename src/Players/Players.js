import React, { Component } from "react";
import playerFile from "./getAllPlayers.json"

class Players extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //loop through players in the player file like below
    for (const player in playerFile) {
      console.log(playerFile[player]);
    }
    return (
      <ul>
        <li key="123">
          temp page
        </li>
      </ul>
    );
  }
}

export default Players;