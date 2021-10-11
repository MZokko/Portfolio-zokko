// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WebIcon from '@mui/icons-material/Web';
// import PaletteIcon from '@mui/icons-material/Palette';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import StorageIcon from '@mui/icons-material/Storage';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import DevicesIcon from '@mui/icons-material/Devices';

export const data = {
  name: 'Alexandre Moradel',
  title: 'Web developer',

  birthdate: 'Nov 1992',
  email: 'alexandremradel92@gmail.com',

  location: 'Sydney',

  social: {
    LinkedIn: {
      link: 'https://www.linkedin.com/',
      text: 'Alex linkedIn',
      // icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://github.com/MZokko',
      text: 'Alex Git',
      // icon: <GitHubIcon />,
    },
  },

  professionalExperience: [
    {
      title: 'Labour agency : Greenstaff',
      date: '2016-2020',
      description: 'LandscaperatGreenstaff(Laboureragency)',
    },
    {
      title: 'Working Holiday – Australia',
      date: '2014-2016',
      description:
        'Farming work in Queensland and Tasmania as a Picker during servral differents seasons',
    },
    {
      title: 'Childcare',
      date: '2011-2014',
      description:
        'working in an outdoor center named « côte des carrières » in Jouy Le Moutier (France)',
    },
    {
      title: 'Technician',
      date: '2011-2014',
      description:
        'company named COFELY during a part of the summer holiday, during high school',
    },
    {
      title: 'Concert and event’s ​organizer​',
      date: '2011-2014',
      description: 'for some local groups of music in an association',
    },
  ],

  educationTraning: [
    {
      title:
        'Bachelor of Information Technology(mobile application development)',
      date: '2017-2020',
    },
    { title: 'White Card / R.S.A Australia', date: '2015' },
    { title: 'Webmaster/Application developer formation', date: '2011-2013' },
    { title: 'B.A.F.A (French certificate for child caring)', date: '2011' },
    { title: 'Scientific High School Degree', date: '2009' },
    { title: 'PSC1 (French first aid assistance)', date: '2007' },
  ],

  serivces: [
    {
      title: 'Web developement',
      description:
        'full responsive web page developement, build for a modern day usage of internet',
      // icon: <WebIcon />,
    },
    {
      title: 'Web design',
      description:
        'Give you a good visual representation to discuss about your project with a visually appealing and easy to identify web design',
      // icon: <PaletteIcon />,
    },
    {
      title: 'Search Engine Optimization',
      description:
        'Create a efficient connection with your customers with a good ranking in google with the SEO service',
      // icon: <FindInPageIcon />,
    },
  ],

  portefolio: [
    {
      // icons: [
      //   { id: 1, icon: <GitHubIcon /> },
      //   { id: 2, icon: <StorageIcon /> },
      //   { id: 3, icon: <PhoneAndroidIcon /> },
      // ],
      title: 'cleaning roaster app',
      techDescription:
        'Mobile application built with android studio using java and MVC architecture, using firebase web services for back end such as authentication,real time data base.(java / android mobile)',
      links: [{ url: 'https://github.com/MZokko/cleanAppAdvStud' }],
    },
    {
      // icons: [
      //   { id: 1, icon: <GitHubIcon /> },
      //   { id: 2, icon: <StorageIcon /> },
      //   { id: 3, icon: <PhoneAndroidIcon /> },
      // ],
      title: 'Memory forge',
      techDescription:
        'A math based memory game, Cross mobile application built using React-native framework and Firebase web services(React native / cross mobile app)',
      links: [{ url: 'https://github.com/MZokko/finalCrossApp' }],
    },
    {
      // icons: [
      //   { id: 1, icon: <GitHubIcon /> },
      //   { id: 2, icon: <StorageIcon /> },
      //   { id: 3, icon: <DevicesIcon /> },
      // ],
      title: 'Burger order',
      techDescription:
        'Build and order a burger, a website created with react using firebase webservices Database(realtime database) store the order informations, the users informations and location and also firebase hosting, see link below.(React js / web app)',
      links: [
        {
          url: 'https://burger-react-ae741.web.app/?fbclid=IwAR1nMPn7BFHuQjUZGNOZokY7kpjK_P5iqQOBDv9u4WGlX8agq-HlRlrCjZw',
        },
      ],
    },
    {
      // icons: [
      //   { id: 1, icon: <GitHubIcon /> },
      //   { id: 2, icon: <StorageIcon /> },
      //   { id: 3, icon: <DevicesIcon /> },
      // ],
      title: 'website for a Tattoo studio',
      techDescription:
        'Website created with React js, using Firebase(storage, firestore, hosting) with a CI/CD pipeline to automatate and faster the testing and deployment process',
      links: [{ url: 'https://tattoo-project-a031d.web.app' }],
    },
  ],
};
