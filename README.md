# Condiment Bowl User Interface
![Build Deploy Prod](https://github.com/condimentbowl/condimentbowl-ui/actions/workflows/build-deploy-prod.yml//badge.svg)
![Build Deploy Test](https://github.com/condimentbowl/condimentbowl-ui/actions/workflows/build-deploy-test.yml//badge.svg)

---
## Insomnia Collection For Sleeper API

Sleeper provides an [API][sleeper-api] for accessing league information. condimentbowl-ui provides an Insomnia Collection will all availble endpoints for easier user access.

### Getting Started
1. Install [Insomnia][insomnia]
2. Import the collection provided by condimentbowl-ui [here][insomnia-collection]
3. Setup Base Environment variable as defined below

```
{
  "baseUrl_v1": "https://api.sleeper.app/v1",
  "leagueId": "699672633066725376",
  "my_userId": "102845756322758656",
  "my_username": "ellefent",
  "my_avatar_id": "f5c029ea930d39764494f2fa92d84e47"
}
```
---

## League Information

### 🏈 General
The Condiment Bowl was established in 2016 and was hosted on the offical [NFL Fantasy Football platform][nfl-fantasy]*. In 2021 the league moved to the [Sleeper][sleeper-main] platform.

Sleeper provides an [overview][sleeper-fantasy-overview] of their platform including features, how to play, mockdrafts, and more. Additional support for the platform can be found on their [support page][sleeper-support-page], or the [offical Sleeper App subreddit][sleeper-subreddit].

<sub>* For legacy purposes, league data from it's time on the NFL Fantasy platform can be accessed [here][nfl-cb]</sub>


### 🎟️ Draft Lottery

The Condiment Bowl uses a lottery process to determine each teams draft position. Each manager's team will be given an amount of entries based on their final standing from the previous season.

The table below provides the number of entries (100 total) that will be assigned to teams based on the previous season's results. In general _Consolation Bowl_ teams have more entries than playoff teams to encourage year-to-year parity. To discourage tanking, higher ranked teams generally have more entries than lower ranked teams. The only exceptions to this are the two teams that participated in the previous season's Championship match. These teams will recieve a single entry each (neither team would tank in the championship).

Place | Bracket          | # of Entries
--    | --               | --
1st   | Playoffs         | 1
2nd   | Playoffs         | 1
3rd   | Playoffs         | 10
4th   | Playoffs         | 5
5th   | Playoffs         | 5
6th   | Playoffs         | 3
7th   | Consolation Bowl | 35
8th   | Consolation Bowl | 15
9th   | Consolation Bowl | 15
10th  | Consolation Bowl | 10
--    |     ---          | 100

#### Example

Place | Team   | # of Entries
--    | --     | --
1st   | Team A | 1
2nd   | Team B | 1
3rd   | Team C | 10
4th   | Team D | 5
5th   | Team E | 5
6th   | Team F | 3
7th   | Team G | 35
8th   | Team H | 15
9th   | Team I | 15
10th  | Team J | 10

The commissioner picks an entry at random and it belongs to Team I. Team I now has their choice of drafting from position 1-10. Team I chooses position 1. The commissioner would pick another entry at random. This time it's Team G. Team G has the choice of drafting from position 2-10. Team G selects position 3. The commissioner would pick another entry at random and this time it belongs to Team I again (a team that was previous drawn). The commissioner would continue to draw until the pulled entry belongs to someone who hasn't selected yet. This process would continue until all draft positions are claimed.

### 🔁 Trading
TBD

### 🚨 Cheating / Collusion
TBD

<!-- Links -->
[nfl-fantasy]: https://fantasy.nfl.com/
[nfl-cb]: https://fantasy.nfl.com/league/4129306
[sleeper-main]:https://sleeper.app/
[sleeper-fantasy-overview]: https://sleeper.app/fantasy-football
[sleeper-support-page]: https://support.sleeper.app/en/
[sleeper-subreddit]: https://www.reddit.com/r/SleeperApp/
[fantasy-football-subreddit]: https://www.reddit.com/r/fantasyfootball/
[insomnia]: https://insomnia.rest/
[insomnia-collection]: https://github.com/condimentbowl/condimentbowl-ui/blob/master/sleeperAPICollection/Insomnia_collection.json
[sleeper-api]: https://docs.sleeper.app/