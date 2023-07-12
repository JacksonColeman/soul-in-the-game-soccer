import { Matchup } from "../../classes/Matchup";

interface MatchDetailsComponentProps {
  matchup: Matchup;
}

const MatchDetailsComponent: React.FC<MatchDetailsComponentProps> = ({ matchup }) => {
  const { homeTeam, awayTeam, goals } = matchup;

  // Sort goals by minute in ascending order
  const sortedGoals = goals.sort((a, b) => a.minute - b.minute);

  return (
    <div className="match-details">
      <h3>Post-Match</h3>
      <h4>{homeTeam.name} {matchup.homeScore} - {matchup.awayScore} {awayTeam.name}</h4>
      <ul>
        {sortedGoals.map((goal, index) => (
          <div
            key={index}
            style={{ textAlign: goal.homeTeam ? "left" : "right" }} // Set text alignment based on homeTeam attribute
          >
           {goal.minute}' - {goal.scorer.firstName} {goal.scorer.lastName}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MatchDetailsComponent;
