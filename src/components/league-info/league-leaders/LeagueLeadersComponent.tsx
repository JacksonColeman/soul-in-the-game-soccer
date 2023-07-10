import React from "react";
import { League } from "../../../classes/League";
import { Player, PlayerGoalkeeper } from "../../../classes/Player";
import { Team } from "../../../classes/Team";
import "./LeagueLeadersComponents.css";

interface LeagueLeadersComponentProps {
  league: League;
}

const LeagueLeadersComponent: React.FC<LeagueLeadersComponentProps> = ({
  league,
}) => {
  const getLeaders = (
    showGoals: boolean,
    showAssists: boolean,
    showCleanSheets: boolean
  ): Player[] => {
    const allPlayers: Player[] = [];

    league.teams.forEach((team: Team) => {
      allPlayers.push(...team.roster);
    });

    return allPlayers
      .filter((player) => {
        if (showGoals && player.stats.goals > 0) {
          return true;
        }
        if (showAssists && player.stats.assists > 0) {
          return true;
        }
        if (
          showCleanSheets &&
          player instanceof PlayerGoalkeeper &&
          player.stats.cleanSheets > 0
        ) {
          return true;
        }
        return false;
      })
      .sort((a, b) => {
        if (showGoals) {
          return b.stats.goals - a.stats.goals;
        }
        if (showAssists) {
          return b.stats.assists - a.stats.assists;
        }
        if (
          showCleanSheets &&
          a instanceof PlayerGoalkeeper &&
          b instanceof PlayerGoalkeeper
        ) {
          return b.stats.cleanSheets - a.stats.cleanSheets;
        }
        return 0;
      })
      .slice(0, 3);
  };

  const goalLeaders = getLeaders(true, false, false);
  const assistLeaders = getLeaders(false, true, false);
  const cleanSheetLeaders = getLeaders(false, false, true);

  const renderLeaders = (
    leaders: Player[],
    statName: string,
  ) => {

    return (
      <div className={`league-leaders`}>
        <h4>{statName}</h4>
        <ul className="stats-list">
          {leaders.map((player: Player) => (
            <li className="stats-row" key={player.id}>
              <div className="stats-row-info">
                <div className="stats-row-player-name">{player.firstName} {player.lastName}</div>
                <div className="stats-row-player-team-name">{player.team?.name}</div>
              </div>
              <div className="stats-row-stat">
                {statName === "Clean Sheets" && player instanceof PlayerGoalkeeper && player.stats.cleanSheets}
                {statName == "Goals" && player.stats.goals}
                {statName == "Assists" && player.stats.assists}
              </div>
            </li>
          ))}
          {leaders.length == 0 ? <div>No stat leaders</div>: ""}
        </ul>
      </div>
    );
  };

  return (
    <div className="league-leaders-container">
      <h3>Stat Leaders</h3>
      {renderLeaders(goalLeaders, "Goals")}
      {renderLeaders(assistLeaders, "Assists")}
      {renderLeaders(cleanSheetLeaders, "Clean Sheets")}
    </div>
  );
};

export default LeagueLeadersComponent;
