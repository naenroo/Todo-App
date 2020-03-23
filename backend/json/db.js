require('dotenv').config();

const dataJson = [
  {
    id: 1,
    title: 'ReactJS',
    image: process.env.reactImage,
    desc: 'ReactJS is great for Frontend and huge community'
  },
  {
    id: 2,
    title: 'Styled Components',
    image: process.env.stcmp,
    desc: 'CSS in Javascript and great for React'
  },
  {
    id: 3,
    title: 'ExpressJS',
    image: process.env.expressjs,
    desc: 'Good nodejs framework and good for community for building API'
  },
  {
    id: 4,
    title: 'MongoDB',
    image: process.env.mongodb,
    desc: 'NoSQL database, great for performance and easy to use it'
  }
];

exports.dataJson = dataJson;
