import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jack Maddox', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jack Maddox',
  subtitle: 'Developer. Founder. Journalist.',
  cta: 'Read more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshotsquare.jpg',
  paragraphOne: `I specialise in full-stack web development. If you have an idea for an app or website and want to see it come to life quickly without being oversold on unnecessary features, let's talk.`,
  paragraphTwo: `I believe in lightweight, responsive and nicely designed web products. I've built B2B services with 24/7 up-time that are used by financial investment companies in the City, and I've built B2C applications used by thousands.`,
  paragraphThree: `The first part of my career was spent in the global newsrooms of CNN, Al Jazeera and AI-driven Dataminr. I worked in breaking news, managed teams across global operations to produce the very best content and products. Situations where teamwork and clear communication are essential.`,
  paragraphFour: `Unlike most developers, I've managed the receiving end of their work. I know how uncomfortable managing a product can be when you can't communicate with or understand your developer.`,
  paragraphFive: `I am uniquely positioned in that I can both build and translate technology into normal talk.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project-swise.jpg',
    title: 'Socialwise',
    info: `Real-Time Twitter Lead Discovery. Subscription clients discover new prospective leads and generate engagement for their platforms or utilise our service as a faster alternative to Twitter’s Tweetdeck offering. `,
    info2: ` Technologies utilised include: NodeJs, React, Redux, Nginx, PostgreSQL, Web Sockets, HTML, CSS, Stripe API, Twitter API, Mailchimp API, Mailgun API, DigitalOcean Ubuntu deployment. `,
    url: 'https://www.socialwise.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project-joinup.jpg',
    title: 'Joinup',
    info:
      'Location based match making app to find pick up sports games happening around you. Over 6000 downloads on App Store & TechCrunch Southeast Pitch-off Top 3 Winner.',
    info2: 'Built with Objective-C, Php, MySQL for iOS.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project-astrologic.jpg',
    title: 'Astrologic',
    info: `Use the stars to guide your fantasy sports decisions! Web application providing live horoscopes for atheletes using the Wikipedia API to find their birthday's and horoscope API's to see how they're doing that gameweek.`,
    info2: `Built with JavaScript, HTML, CSS and hosted on AWS.`,
    url: '',
    repo: 'https://github.com/maddoxjack/Astrologic-Fantasy-Sports', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project-mx5atl.jpg',
    title: 'MX5Atlanta.com',
    info: `The largest Maza Miata community in the South East USA. Hosted events, active online discussions, sponsored by multiple local and national businesses, and many lifelong friendships made. Generated over 2 million hits a month at its height. Built at 19 years old.`,
    info2: `Built with VBulletin, custom CSS and HTML.`,
    url: 'http://www.mx5atlanta.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jack@socialwise.io',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://www.twitter.com/maddoxjack',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maddoxjack/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/maddoxjack',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
