import { Matchup } from "../../classes/Matchup";
import User from "../../classes/User";
import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import MatchDetailsComponent from "./MatchDetailsComponent";
import AroundTheLeagueComponent from "./AroundTheLeagueComponent";
import StandingsTableComponent from "./StandingsTableComponent";

interface PostMatchComponentProps {
  universe: Universe;
  league: League;
  user: User;
}

const PostMatchComponent: React.FC<PostMatchComponentProps> = ({ universe, league, user }) => {
  return (
    <div className="post-match">
      <div className='standings-section'>
        <h3>Standings</h3>
        {universe.user && < StandingsTableComponent league={league} userTeamID={universe.user.teamID}/>}
      </div>
      <MatchDetailsComponent matchup={universe.userMatchup}/>
      <AroundTheLeagueComponent matchups={league.getWeekMatchups(universe.week)} userTeamID={user.teamID}/>
    </div>
  )
};

export default PostMatchComponent;
