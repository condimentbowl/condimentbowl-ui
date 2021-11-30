# Condiment Bowl User Interface
![Build Deploy Prod](https://github.com/condimentbowl/condimentbowl-ui/actions/workflows/build-deploy-prod.yml//badge.svg)
![Build Deploy Test](https://github.com/condimentbowl/condimentbowl-ui/actions/workflows/build-deploy-test.yml//badge.svg)

---

## League Information

### 🏈 General
The Condiment Bowl was established in 2016 and was hosted on the offical [NFL Fantasy Football platform][nfl-fantasy]*. In 2021 the league moved to the [Sleeper][sleeper-main] platform.

<sub>* For legacy purposes, league data from it's time on the NFL Fantasy can be accessed [here][nfl-cb]</sub>


### 🎟️ Draft Lottery

Each player will have a weighted probability of picking their draft position first. The weights depend on the player's standing at the end of last season.

Place | Bracket          | Probability
--    | --               | --
1st   | Playoffs         | 0.01
2nd   | Playoffs         | 0.01
3rd   | Playoffs         | 0.10
4th   | Playoffs         | 0.05
5th   | Playoffs         | 0.05
6th   | Playoffs         | 0.03
7th   | Consolation Bowl | 0.35
8th   | Consolation Bowl | 0.15
9th   | Consolation Bowl | 0.15
10th  | Consolation Bowl | 0.10


*In general Consolation bowl teams have higher probability than playoff teams to encourage year-to-year parity.
**To discourage tanking, higher ranked teams generally have higher probabilities than lower ranked teams. With the exception of last year's Champion and runner-up since no one will tank the championship round. These two players have lower probabilities than anyone.To actually determine draft order each player is assigned a set of number within 1-100 depending on their probability. For example, the winner of the Consolation Bowl will be given 1 through 35. Using a random number generator a random number ranging from 1 to 100 is chosen. The player who corresponds to this chosen number is then allowed to chose their draft position. This process is repeated until the draft order is determined.

### 🔁 Trading
TBD

### 🚨 Cheating / Collusion
TBD

<!-- Links -->
[nfl-fantasy]: https://fantasy.nfl.com/
[nfl-cb]: https://fantasy.nfl.com/league/4129306
[sleeper-main]:https://sleeper.app/
[sleeper-support-page]: https://support.sleeper.app/en/
