export default function SponsorBubble({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className='grid justify-items-center'>
     
      <div className={`sponsor-bubble`}>
        <div className='sponsor-bubble-img-container'>
          <a href={sponsor.link} target="_blank">
            <img
              id='sponsor_logo'
              src={sponsor.logo}
              className='rounded-full md:w-28 md:h-28 w-10 h-10 sponsor-bubble-img'
            />
          </a>
        </div>

        <div className={`sponsor-bubble-back`}>
          <div className='sponsor-bubble-button-container' />
        </div>
      </div>
      <div className='text-center text-l font-bold md:visible hidden'>{sponsor.name}</div>
    </div>
  );
}

export type Sponsor = {
  name: string;
  logo: string;
  link: string;
  colour: string;
  tier: string;
};
