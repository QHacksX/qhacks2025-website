

export default function SponsorBubble({
    sponsor
}: {
    sponsor: Sponsor
}) {
    return (
        <div className={`sponsor-bubble bubble-${sponsor.colour}`}>
            <div className='sponsor-bubble-img-container'>
                <img width={112} height={112} id='sponsor_logo' src={sponsor.logo} className="rounded-full w-28 h-28 sponsor-bubble-img" />
            </div>

            <div className={`sponsor-bubble-back`}>
                <div className='sponsor-bubble-name'>{sponsor.name}</div>
                <div className='sponsor-bubble-button-container'>


                </div>
            </div>
        </div>
    )
}

export type Sponsor = {
    name: string,
    logo: string,
    link: string,
    colour: string,
    tier: string
}