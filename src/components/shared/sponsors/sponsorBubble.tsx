

export default function SponsorBubble(sponsor: any) {
    const { name, role, image, linkedin, github, instagram, color } = sponsor;

    return (
        <div className={`sponsor-bubble bubble-${color}`}>
            <div className='sponsor-bubble-img-container'>
                <img width={112} height={112} id='sponsor_logo' src={image} className="rounded-full w-28 h-28 sponsor-bubble-img" />
            </div>

            <div className={`sponsor-bubble-back`}>
                <div className='sponsor-bubble-name'>{name}</div>
                <div className='sponsor-bubble-role'>{role}</div>
                <div className='sponsor-bubble-button-container'>


                </div>
            </div>
        </div>
    )
}