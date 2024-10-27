"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../../css/TeamBubble.css"

export type TeamMember = {
    name: string,
    role: string,
    image: string,
    linkedin?: string | null,
    github?: string | null,
    instagram?: string | null,
    color: string
}

const TeamBubble = ({ teamMember, key } : { teamMember: TeamMember, key: any }) => {
    return (
        <div className={`team-bubble bubble-${teamMember.color}`}>
                <div className='team-bubble-img-container'>
                    <img width={112} height={112} id='team_image' src={teamMember.image} className="rounded-full w-28 h-28 team-bubble-img"/>
                </div>

                <div className={`team-bubble-back`}>
                        <div className='team-bubble-name'>{teamMember.name}</div>
                        <div className='team-bubble-role'>{teamMember.role}</div>
                    <div className='team-bubble-button-container'>
                        {/* <a href={linkedin}><FontAwesomeIcon className='team-bubble-button' icon={faLinkedin} /></a>
                        <a href={instagram}><FontAwesomeIcon className='team-bubble-button' icon={faInstagram} /></a>
                        <a href={github}><FontAwesomeIcon className='team-bubble-button' icon={faGithub} /></a> */}
                        {teamMember.linkedin !== null ? (
                        <a href={teamMember.linkedin}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faLinkedin} />
                        </a>
                        ) : null}

                        {teamMember.instagram !== null ? (
                        <a href={teamMember.instagram}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faInstagram} />
                        </a>
                        ) : null}

                        {teamMember.github !== null ? (
                        <a href={teamMember.github}>
                            <FontAwesomeIcon className='team-bubble-button' icon={faGithub} />
                        </a>
                        ) : null}
                    </div>
                </div>
            </div>
            
    );
};

export default TeamBubble;