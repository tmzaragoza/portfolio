export const getProjects = () => {
  return Promise.all([
    {
      title: 'Kids2',
      site: 'www.kidstoopdx.com',
      github: 'https://github.com/team-herd',
      date: '4/19',
      concept: 'Calendar of local events',
      about: 'A platform for searching and posting activities geared towards children and youth in the Portland, OR area.',
      pic: 'http://res.cloudinary.com/tmzaragoza/image/upload/v1555955308/Screen_Shot_2019-04-22_at_10.47.15_AM.png',
      tech: 'React, redux, Jest, SuperTest, MongoDB'
    },
    {
      title: 'Countries',
      site: 'https://amazing-torvalds-2f4d83.netlify.com/',
      github: 'https://github.com/tmzaragoza/react_hack',
      date: '3/19',
      concept: 'Search countries and their flags',
      about: 'Search for a country\'s basic information.',
      pic: 'https://res.cloudinary.com/tmzaragoza/image/upload/v1553139617/Screen_Shot_2019-03-20_at_8.35.44_PM.png',
      tech: 'React, redux, Jest, enzyme, SuperTest'
    },
    {
      title: 'SimAlchemy',
      site: 'https://sim-alchemy.herokuapp.com/',
      github: 'https://github.com/team-sailboat/SimAlchemy',
      date: '02/19',
      concept: 'CLI game',
      about: 'In this back-end app, we built a choose your own code school adventure for the command line. Teachers can log in and post up to 5 assignments to try and better their cohort\'s grades; includes app-wide unit and end-to-end test coverage',
      pic: 'https://res.cloudinary.com/tmzaragoza/image/upload/v1553139916/SimAlch.png',
      tech: 'Node.js, MongoDB, Express, Jest, SuperTest, nodemon, dotenv, Mongoose, morgan, SuperAgent, inquirer, bcrypt.js, figlet, jsonwebtoken, Chance, chalk, gradient-string'
    },
    {
      title: 'Jokester',
      site: 'https://octopus-jokester.herokuapp.com/#/',
      github: 'https://github.com/alchemy-octopus',
      date: '12/18',
      concept: 'Create your own jokes list',
      about: 'Create your own comedic set list by saving jokes to your set, creating your own and rating other jokes.',
      pic: 'https://res.cloudinary.com/tmzaragoza/image/upload/v1553139432/Screen_Shot_2019-03-20_at_8.32.17_PM.png',
      tech: 'Vue, Node.js, Express, Jest, SuperTest, nodemon, bcrypt.js, jsonwebtoken, morgan, vue-star-rating.'
    }
  ]);
};

