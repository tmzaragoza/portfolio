export const getProjects = () => {
  return Promise.all([
    {
      title: 'SimAlchemy',
      date: '02/19',
      concept: 'CLI game',
      about: 'In this back-end app, we built a choose your own code school adventure for the command line. Teachers can log in and post up to 5 assignments to try and better their cohort\'s grades; includes app-wide unit and end-to-end test coverage',
      pic: '',
      tech: 'Node.js, MongoDB, Express, Jest, SuperTest, nodemon, dotenv, Mongoose, morgan, SuperAgent, inquirer, bcrypt.js, figlet, jsonwebtoken, Chance, chalk, gradient-string'
    }
  ]);
};

