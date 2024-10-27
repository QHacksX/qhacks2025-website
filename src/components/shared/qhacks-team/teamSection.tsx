import TeamBubble from "./teamBubble";
import { qhacksTeam } from "@/src/data/qhacks-team/team_list";

const TeamSection = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center">
			{qhacksTeam.map((member) => (
                <TeamBubble teamMember={member} key={member.name} />
            ))}
		</div>
    );
}

export default TeamSection;