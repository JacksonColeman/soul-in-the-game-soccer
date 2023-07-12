import User from "../../classes/User";
import { Universe } from "../../classes/Universe";
import { League } from "../../classes/League";
import StandingsTableComponent from "../league-info/standings/StandingsTableComponent";
import MatchweekComponent from "../league-info/matchups/MatchweekComponent";

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
      <MatchweekComponent matchups={league.getWeekMatchups(universe.week)} week={universe.week} userTeamID={user.teamID}/>
    </div>
  )
};

export default PostMatchComponent;
