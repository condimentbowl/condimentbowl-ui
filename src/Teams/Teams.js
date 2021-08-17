import React, { Component } from "react";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      teams: []
    };
  }

  componentDidMount() {
    fetch("https://api.sleeper.app/v1/league/699672633066725376/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            teams: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, teams } = this.state;
    const teamNames = [];
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      teams.forEach((team) => {
        let indTeam = {};
        const curAvatarUri = team.avatar !== null ? team.avatar : "82aec8e811b839b8ec25d7b458afd57b"
        if (team.metadata.team_name) {

          indTeam = {
            indTeamName: team.metadata.team_name,
            indUserId: team.user_id,
            indAvatarUri: "https://sleepercdn.com/avatars/" + curAvatarUri
          };
        } else {
          indTeam = {
            indTeamName: team.display_name,
            indUserId: team.user_id,
            indAvatarUri: "https://sleepercdn.com/avatars/" + curAvatarUri
          };
        }
        teamNames.push(indTeam);
      });


      
      return (
        <ul>
          {teamNames.map(item => (
            <li key={item.user_id}>
              {item.indTeamName} - {item.indAvatarUri}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Teams;