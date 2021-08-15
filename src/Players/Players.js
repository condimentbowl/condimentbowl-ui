import React, { Component } from "react";
import playerFile from "../../files/getAllPlayers.json"

class Stuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: []
    };
  }

//   componentDidMount() {
//     fetch("https://api.sleeper.app/v1/league/699672633066725376/users")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             teams: result
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

  render() {
    // const { error, isLoaded, teams } = this.state;
    // const teamNames = [];
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    console.log("player",playerFile.2103);
      playerFile.forEach((player) => {
          console.log(player.age);
        // let slimTeam = {};
        // if (team.metadata.team_name) {
        //   slimTeam = {
        //     locTeamName: team.metadata.team_name,
        //     locUserId: team.user_id
        //   };
        // } else {
        //   slimTeam = {
        //     locTeamName: team.display_name,
        //     locUserId: team.user_id
        //   };
        // }
        // teamNames.push(slimTeam);
      });
      return (
        <ul>
          {teamNames.map(item => (
            <li key={item.user_id}>
              {item.locTeamName}
            </li>
          ))}
        </ul>
      );
    // }
  }
}

export default Stuff;