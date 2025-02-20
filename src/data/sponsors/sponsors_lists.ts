export type sponsorType = {
  name: string;
  logo: string;
  scale: number;
  link: string;
  tier: string;
};

export type sponsorBlurb = {
  name: string;
  logo: string;
  link: string;
  blurb: string;
};

export const sponsorBlurbs: sponsorBlurb[] = [
  {
    "name": "National Bank of Canada",
    "logo": "/sponsors/NationalBankLogoNew.png",
    "link": "https://emplois.bnc.ca/fr_CA/careers",
    "blurb":
      "With $462 billion in assets as at October 31, 2024, National Bank of Canada is one of Canada's six systemically important banks. The Bank has approximately 30,000 employees in knowledge-intensive positions and operates through three business segments in Canada: Personal and Commercial Banking, Wealth Management and Financial Markets. A fourth segment, U.S. Specialty Finance and International, complements the growth of its domestic operations. Its securities are listed on the Toronto Stock Exchange (TSX: NA). Follow the Bank's activities at nbc.ca or via social media.\n\nNational Bank Financial Markets offers a complete suite of products and services to corporations, institutional clients, and public-sector entities. The segment focuses on providing comprehensive advisory services and research or capital markets products and services to support clients and their growth. National Bank Financial Markets’ structure fosters agility and collaboration while encouraging creativity.",
  },
  {
    "name": "Qt Group",
    "logo": "/sponsors/QtGroup.png",
    "link": "https://www.qt.io/group",
    "blurb":
      "We are a global software powerhouse, trusted by industry leaders and over 1.5 million developers worldwide. Our solutions drive productivity across the entire product development journey—from intuitive UI design and agile development to seamless quality management and deployment. Qt is where software excellence begins.",
  },
  {
    "name": "Manulife Financial",
    "logo": "/sponsors/Manulife-WhiteBG.png",
    "link": "https://www.manulife.ca/careers.html",
    "blurb":
      "Manulife is a leading global financial services institution dedicated to helping individuals and businesses achieve their financial goals through a variety of services, including insurance, wealth, and asset management. With a presence in numerous markets worldwide, we are committed to nurturing the next generation of talent. We offer co-op, internship, and new graduate programs for students across diverse fields such as actuarial science, technology, digital marketing, investment, Global Wealth and Asset Management (GWAM), accounting and finance, and more. Join us to gain valuable experience, develop your skills, and launch your career with a company that values innovation, growth, and excellence.",
  },
];

export const currentSponsors: sponsorType[] = [
  {
    "name": "National Bank of Canada",
    "logo": "/sponsors/NationalBankLogoNew.png",
    "link": "https://emplois.bnc.ca/fr_CA/careers",
    "scale": 1.25,
    "tier": "peta",
  },
  {
    "name": "Qt Group",
    "logo": "/sponsors/QtGroup.png",
    "link": "https://www.qt.io/group",
    "scale": 1.25,
    "tier": "tera",
  },
  {
    "name": "Manulife Financial",
    "logo": "/sponsors/Manulife-WhiteBG.png",
    "link": "https://www.manulife.ca/careers.html",
    "scale": 1.75,
    "tier": "giga",
  },
  // Doesn't seem like we have them this year
  // {
  //   "name": "CSE",
  //   "logo": "/sponsors/CSE.svg",
  //   "link": "https://www.cse-cst.gc.ca/en",
  //   "scale": 1.25,
  //   "tier": "giga",
  // },
  {
    "name": "DDQIC",
    "logo": "/sponsors/DDQIC.png",
    "link": "https://www.queensu.ca/innovationcentre/",
    "scale": 1.5,
    "tier": "giga",
  },
  {
    "name": "Queens Engineering",
    "logo": "/sponsors/Engineering.svg",
    "link": "https://smithengineering.queensu.ca/",
    "scale": 1.75,
    "tier": "giga",
  },
  {
    "name": "ECE",
    "logo": "/sponsors/ECE.png",
    "link": "https://www.ece.queensu.ca/about-us/employment-opportunities.html",
    "scale": 1,
    "tier": "mega",
  },
  {
    "name": "Office of the Principal and Vice-Chancellor",
    "logo": "/sponsors/opvc.png",
    "link": "https://www.queensu.ca/principal/",
    "scale": 1,
    "tier": "mega",
  },
  {
    "name": "GitHub",
    "logo": "/sponsors/github.png",
    "link": "https://github.com/about/careers",
    "scale": 1.6,
    "tier": "kilo",
  },
  {
    "name": "CPP",
    "logo": "/sponsors/CPP.svg",
    "link":
      "https://www.canada.ca/en/services/benefits/publicpensions/cpp.html",
    "scale": 1.25,
    "tier": "kilo",
  },
  {
    "name": "City of Kingston",
    "logo": "/sponsors/Kingston.svg",
    "link": "https://cityofkingston.ca/mic",
    "scale": 0.85,
    "tier": "kilo",
  },
  {
    "name": "Queens Computing",
    "logo": "/sponsors/Computing.png",
    "link": "https://www.cs.queensu.ca/",
    "scale": 1,
    "tier": "kilo",
  },
  {
    "name": "Kingston Utilities",
    "logo": "/sponsors/KingstonUtilities.png",
    "link": "https://utilitieskingston.com/",
    "scale": 1.25,
    "tier": "kilo",
  },
  {
    "name": "Fig Financial",
    "logo": "/sponsors/fig.png",
    "link": "https://fig.ca/en/",
    "scale": 0.9,
    "tier": "kilo",
  },
  {
    "name": "COMPSA",
    "logo": "/sponsors/Compsa.png",
    "link": "https://compsa.ca/",
    "scale": 1.25,
    "tier": "kilo",
  },
  {
    "name": "Guayaki Yerba Mate",
    "logo": "/sponsors/guayaki.png",
    "link": "https://guayaki.com/",
    "scale": 1.25,
    "tier": "kilo",
  },
  {
    "name": "xyz",
    "logo": "/sponsors/xyz.svg",
    "link": "https://gen.xyz/",
    "scale": 0.75,
    "tier": "kilo",
  },
  {
    "name": "Stand Out Stickers",
    "logo": "/sponsors/StandOutStickers.svg",
    "link": "https://hackp.ac/mlh-standoutstickers-hackathons",
    "scale": 1.25,
    "tier": "kilo",
  },
];

export const highlightedPrevSponsors = [
  {
    "name": "Assembly AI",
    "logo": "/sponsors/AssemblyAI.svg",
    "link": "https://apply.workable.com/assemblyai/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Axure",
    "logo": "/sponsors/Axure.svg",
    "link": "https://www.axure.com/careers/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Bounce",
    "logo": "/sponsors/Bounce.svg",
    "link": "https://www.bouncelife.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Convictional",
    "logo": "/sponsors/Convictional.svg",
    "link": "https://jobs.ashbyhq.com/convictional",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Gameloft",
    "logo": "/sponsors/gameloft.svg",
    "link": "https://www.gameloft.com/corporate/en/jobs/apply/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Mosaic",
    "logo": "/sponsors/Mosaic.svg",
    "link": "https://www.mosaicmfg.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "PWC",
    "logo": "/sponsors/PWC.svg",
    "link": "https://www.mosaicmfg.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Amazon",
    "logo": "/sponsors/Amazon.svg",
    "link": "https://www.amazon.jobs/en/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Dominos",
    "logo": "/sponsors/Dominoes.svg",
    "link": "https://www.dominos.ca/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Voiceflow",
    "logo": "/sponsors/Voiceflow.svg",
    "link": "https://www.voiceflow.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "AMD",
    "logo": "/sponsors/AMD.svg",
    "link": "https://www.amd.com/en/corporate/careers",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "BMO",
    "logo": "/sponsors/BMO.svg",
    "link": "https://jobs.bmo.com/ca/en",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "IBM",
    "logo": "/sponsors/IBM.svg",
    "link": "https://www.ibm.com/ca-en/employment/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "MaRS",
    "logo": "/sponsors/MaRS.svg",
    "link": "https://marsdd.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Scotiabank",
    "logo": "/sponsors/Scotiabank.svg",
    "link": "https://www.scotiabank.com/careers/en/careers.html",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Stand Out Stickers",
    "logo": "/sponsors/StandOutStickers.svg",
    "link": "http://hackp.ac/mlh-StandOutStickers-hackathons",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
];

export const inKindSponsors = [
  {
    "name": "Incogni",
    "logo": "/sponsors/Incogni.png",
    "link": "https://incogni.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "NordPass",
    "logo": "/sponsors/NordPass.png",
    "link": "https://nordpass.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "NordVPN",
    "logo": "/sponsors/NordVPN.png",
    "link": "https://nordvpn.com/hackathons",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Saily",
    "logo": "/sponsors/Saily.png",
    "link": "https://saily.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Score Pizza",
    "logo": "/sponsors/ScorePizza.png",
    "link": "https://scorepizza.ca/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Kingston Bouldering Cooperative",
    "logo": "/sponsors/KBC.png",
    "link": "https://kingstonboulderingcoop.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Novel Idea",
    "logo": "/sponsors/NovelIdea.png",
    "link": "http://novelideabooks.ca/wp/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Kingston Frontenacs",
    "logo": "/sponsors/KingstonFrontenacs.png",
    "link": "https://chl.ca/ohl-frontenacs/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
];

export const fullPrevSponsors = [
  {
    "name": "Assembly AI",
    "logo": "/sponsors/AssemblyAI.svg",
    "link": "https://apply.workable.com/assemblyai/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Axure",
    "logo": "/sponsors/Axure.svg",
    "link": "https://www.axure.com/careers/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Bounce",
    "logo": "/sponsors/Bounce.svg",
    "link": "https://www.bouncelife.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Codology",
    "logo": "/sponsors/Codology.svg",
    "link": "https://www.codology.org/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Convictional",
    "logo": "/sponsors/Convictional.svg",
    "link": "https://jobs.ashbyhq.com/convictional",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },

  {
    "name": "Gameloft",
    "logo": "/sponsors/gameloft.svg",
    "link": "https://www.gameloft.com/corporate/en/jobs/apply/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "GitHub",
    "logo": "/sponsors/github.svg",
    "link": "https://github.com/about/careers",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Kingston",
    "logo": "/sponsors/Kingston.svg",
    "link": "https://innovation-challenge.cityofkingston.ca/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Leading Learners",
    "logo": "/sponsors/LeadingLearners.svg",
    "link": "https://www.leading-learners.com/careers",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Mosaic",
    "logo": "/sponsors/Mosaic.svg",
    "link": "https://www.mosaicmfg.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "PWC",
    "logo": "/sponsors/PWC.svg",
    "link": "https://www.mosaicmfg.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Sleek",
    "logo": "/sponsors/Sleek.svg",
    "link": "https://apply.workable.com/careers-at-sleek/?lng=en",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Taskade",
    "logo": "/sponsors/Taskade.svg",
    "link": "https://www.taskade.com/jobs",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Whoosh",
    "logo": "/sponsors/Whoosh.svg",
    "link": "https://ca.whoosh.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Amazon",
    "logo": "/sponsors/Amazon.svg",
    "link": "https://www.amazon.jobs/en/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Redbull",
    "logo": "/sponsors/Redbull.svg",
    "link": "https://jobs.redbull.com/ca-en",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Dominoes",
    "logo": "/sponsors/Dominoes.svg",
    "link": "https://www.dominos.ca/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Ontario Teachers Pension Plan",
    "logo": "/sponsors/OTPP.svg",
    "link": "https://www.otpp.com/en-ca/careers/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Kingston Utilities",
    "logo": "/sponsors/KingstonUtilities.svg",
    "link": "https://utilitieskingston.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Queens Engineering",
    "logo": "/sponsors/Engineering.svg",
    "link": "https://www.ece.queensu.ca/about-us/employment-opportunities.html",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },

  {
    "name": "Queens Computing",
    "logo": "/sponsors/Computing.svg",
    "link": "https://www.cs.queensu.ca/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Voiceflow",
    "logo": "/sponsors/Voiceflow.svg",
    "link": "https://www.voiceflow.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Bayun",
    "logo": "/sponsors/Bayun.svg",
    "link": "",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "AMD",
    "logo": "/sponsors/AMD.svg",
    "link": "https://www.amd.com/en/corporate/careers",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "BMO",
    "logo": "/sponsors/BMO.svg",
    "link": "https://jobs.bmo.com/ca/en",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Echo",
    "logo": "/sponsors/Echo.svg",
    "link": "https://www.echo3d.co/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "IBM",
    "logo": "/sponsors/IBM.svg",
    "link": "https://www.ibm.com/ca-en/employment/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Kingston Bouldering Club",
    "logo": "/sponsors/KBC.svg",
    "link": "https://kingstonboulderingcoop.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Kenworth",
    "logo": "/sponsors/Kenworth.svg",
    "link": "https://www.kenworth.com/careers/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Mapbox",
    "logo": "/sponsors/Mapbox.svg",
    "link": "https://www.mapbox.com/careers",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "MaRS",
    "logo": "/sponsors/MaRS.svg",
    "link": "https://marsdd.com/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Scotiabank",
    "logo": "/sponsors/Scotiabank.svg",
    "link": "https://www.scotiabank.com/careers/en/careers.html",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "SmileCDR",
    "logo": "/sponsors/SmileCDR.svg",
    "link": "https://www.smilecdr.com/careers",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "StanAI",
    "logo": "/sponsors/STAN.png",
    "link": "https://www.stanintelligence.com/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Stand Out Stickers",
    "logo": "/sponsors/StandOutStickers.svg",
    "link": "http://hackp.ac/mlh-StandOutStickers-hackathons",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "XYZ",
    "logo": "/sponsors/XYZ.svg",
    "link": "https://gen.xyz/",
    "colour": "bg-yellow-500",
    "tier": "previous",
  },
  {
    "name": "Manulife Financial",
    "logo": "/sponsors/manulife.png",
    "link": "https://www.manulife.ca/careers.html",
    "colour": "bg-yellow-500",
    "tier": "mega",
  },
  {
    "name": "National Bank of Canada",
    "logo": "/sponsors/NationalBank.svg",
    "link": "https://emplois.bnc.ca/fr_CA/careers",
    "colour": "bg-yellow-500",
    "tier": "tera",
  },
  {
    "name": "CPP",
    "logo": "/sponsors/CPP.svg",
    "link": "",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Campus Book Store",
    "logo": "/sponsors/CampusBookStore.svg",
    "link": "",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Score Pizza",
    "logo": "/sponsors/ScorePizza.png",
    "link": "https://scorepizza.ca/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "System X",
    "logo": "/sponsors/SystemX.svg",
    "link": "https://www.systemx.net/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Pinnacle",
    "logo": "/sponsors/Pinnacle.svg",
    "link": "https://pinnacle.us.org/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Art of Problem Solving",
    "logo": "/sponsors/AOPS.svg",
    "link": "https://artofproblemsolving.com/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
  {
    "name": "Interview Cake",
    "logo": "/sponsors/InterviewCake.jpeg",
    "link": "https://www.interviewcake.com/",
    "colour": "bg-yellow-500",
    "tier": "kilo",
  },
];
