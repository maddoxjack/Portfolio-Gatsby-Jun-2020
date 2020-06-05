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
  img: 'fbprofilepic.jpg',
  paragraphOne: `Hello!`,
  paragraphTwo: `For as long as I can remember I have been messing with computers. Building and selling them, or making websites. `,
  paragraphThree: `Enter my 20's and journalism took over in pursuit of knowing more about the world around us. I spent some great years working at CNN, Al Jazeera America and Dataminr.`,
  paragraphFour: `In that time I launched an iOS app called Joinup. Pitched at TechCrunch SouthEast and finished runner-up. It was intoxicating. But it ate me knowing that I couldn't write it myself. `,
  paragraphFive: `So I took the plunge. Made the change. And learned to code.  I stand here now as a builder of things. And the Founder of a certain Socialwise.`,
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
