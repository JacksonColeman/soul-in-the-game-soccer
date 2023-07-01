import React from "react";
import { League } from "../../classes/League";
import { Player, PlayerGoalkeeper } from "../../classes/Player";
import { Team } from "../../classes/Team";
import "../styles/LeagueLeadersComponents.css";

interface LeagueLeadersComponentProps {
  league: League;
}

const LeagueLeadersComponent: React.FC<LeagueLeadersComponentProps> = ({
  league,
}) => {
  const getLeaders = (showGoals: boolean, showAssists: boolean, showCleanSheets: boolean): Player[] => {
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
        if (showCleanSheets && player instanceof PlayerGoalkeeper && player.stats.cleanSheets > 0) {
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
        if (showCleanSheets && a instanceof PlayerGoalkeeper && b instanceof PlayerGoalkeeper) {
          return b.stats.cleanSheets - a.stats.cleanSheets;
        }
        return 0;
      })
      .slice(0, 5);
  };
  
  const goalLeaders = getLeaders(true, false, false);
  const assistLeaders = getLeaders(false, true, false);
  const cleanSheetLeaders = getLeaders(false, false, true);

  return (
    <div className="league-leaders-container">
      <h4>Goals</h4>
      <table className="leaders-table">
        <tbody>
          {goalLeaders.map((player: Player) => (
            <tr key={player.id}>
              <td>{`${player.firstName} ${player.lastName}`}</td>
              <td>{player.getTeam(league)?.name || "-"}</td>
              <td>{player.stats.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Assists</h4>
      <table className="leaders-table">
        <tbody>
          {assistLeaders.map((player: Player) => (
            <tr key={player.id}>
              <td>{`${player.firstName} ${player.lastName}`}</td>
              <td>{player.getTeam(league)?.name || "-"}</td>
              <td>{player.stats.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Clean Sheets</h4>
      <table className="leaders-table">
        <tbody>
          {cleanSheetLeaders.map((player: Player) => (
            <tr key={player.id}>
              <td>{`${player.firstName} ${player.lastName}`}</td>
              <td>{player.getTeam(league)?.name || "-"}</td>
              <td>{player instanceof PlayerGoalkeeper && player.stats.cleanSheets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueLeadersComponent;
