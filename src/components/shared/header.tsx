import Wave from "react-wavify";
import MobileNav from "./mobileNav";

const InvertedWaveBackground = ({
  isSignedIn,
  screenWidth,
}: {
  isSignedIn: boolean;
  screenWidth: number;
}) => {
  return (
    <div className='absolute top-0 h-screen w-full'>
      {screenWidth > 700 ? (
        // <Link
        //   href={isSignedIn ? "/" : "/signin"}
        //   onClick={() => {
        //     if (isSignedIn) {
        //       signOutUser();
        //     }
        //   }}
        // >
        //   <p className='hover:text-[#ffd24d] absolute z-20 font-bold text-2xl px-10 py-2 rounded-xl text-center top-6 bg-[#132f4c] drop-shadow-[0_5px_10px_rgb(255,255,255)] w-60 mr-auto ml-auto left-0 right-0'>
        //     {isSignedIn ? "Sign Out" : "Sign In"}
        //   </p>
        // </Link>
        <></>
      ) : (
        MobileNav({ isSignedIn: isSignedIn })
      )}

      <img
        src={"/mlh-trust-badge-2025-gray.png"}
        alt='Major League Hacking Trust Badge'
        className='absolute z-20 w-128 h-224 md:w-32 md:right-20 w-28 right-5 pb-20 drop-shadow-[0_5px_10px_rgb(255,255,255)]'
      />

      {screenWidth > 768 ? (
        <img
          color='transparent'
          src={"/crown2.png"}
          alt='Queens Crown'
          className='absolute z-20 w-128 h-111 md:w-32  w-28 right-5  pb-20 md:left-10  drop-shadow-[0_5px_10px_rgb(255,255,255)]'
        />
      ) : null}

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Red Wave */}
        <div
          style={{
            flex: 1,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Wave
            fill='url(#gradient)'
            paused={false}
            style={{ width: "100%", height: "14%", transform: "scaleY(-1)" }}
            options={{
              height: 20,
              amplitude: 21,
              speed: 0.12,
              points: 5,
            }}
          >
            <defs>
              <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop
                  offset='0%'
                  style={{ stopColor: '#CB372D', stopOpacity: 1 }}
                />
                <stop
                  offset='33.33%'
                  style={{ stopColor: "#CB372D", stopOpacity: 1 }}
                />
                <stop
                  offset='33.33%'
                  style={{ stopColor: "#E2A022", stopOpacity: 1 }}
                />
                <stop
                  offset='66.66%'
                  style={{ stopColor: "#E2A022", stopOpacity: 1 }}
                />
                <stop
                  offset='66.66%'
                  style={{ stopColor: "#022B76", stopOpacity: 1 }}
                />
                <stop
                  offset='100%'
                  style={{ stopColor: "#022B76", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </Wave>
        </div>
       
      </div>
    </div>
  );
};

export default InvertedWaveBackground;
