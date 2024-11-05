import TeamBubble from "./teamBubble";
import { qhacksTeam } from "@/src/data/qhacks-team/team_list";

const TeamSection = () => {
    return (
        <div className="pb-100">
            <div className="pb-10">
                <h1 className="align-center text-white text-3xl md:text-5xl mb-2 md:mb-0 font-bold text-center">
                    <span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                        {" "}
                        Our Team
                    </span>
                </h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {qhacksTeam.map((member) => (
                    <TeamBubble teamMember={member} key={member.name} />
                ))}
            </div>
        </div>
    );
}

export default TeamSection;