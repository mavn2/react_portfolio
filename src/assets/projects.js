// List of projects for portfolio, stored here to reduce imports/clutter on portfolio page
// Import images for project cards, numbered for easier replacement
import img1 from './Z_App.png';
import img2 from './Burger_App.png';
import img3 from './N_Taker.png';
import img4 from './B_Finder.png';
import img5 from './Weather.png';
import img6 from './C_Quiz.png';

// Array of project objects, ready to be iterated over using .map()
const projects = [
  {
    name: 'Zen App',
    src: img1,
    alt: 'App homepage displaying quote.',
    git: 'https://github.com/mavn2/zen-app',
    live: 'https://mighty-gorge-04831.herokuapp.com/',
  },
  { 
    name: 'Eat-Da-Burger',
    src: img2,
    alt: 'App homepage.',
    git: 'https://github.com/mavn2/Eat-Da-Burger',
    live: 'https://safe-gorge-00394.herokuapp.com/',
  },
  {
    name: 'Note Taker',
    src: img3,
    alt: 'App with saved notes and note in progress.',
    git: 'https://github.com/mavn2/Note_Taker',
    live: 'https://mn-express-note.herokuapp.com/notes',
  },
  {
    name: 'Brewery Finder',
    src: img4,
    alt: 'App displaying search results.',
    git: 'https://github.com/mavn2/projectone',
    live: 'https://mavn2.github.io/projectone/',
  },
  {
    name: 'Weather App',
    src: img5,
    alt: 'Screen with weekly forecast, saved cities in side-bar.',
    git: 'https://github.com/mavn2/classrep/tree/master/6hw',
    live: 'https://mavn2.github.io/classrep/6hw/',
  },
   {
    name: 'Coding Quiz',
    src: img6,
    alt: 'Multiple choice quiz question.',
    git: 'https://github.com/mavn2/classrep/tree/master/4hw',
    live: 'https://mavn2.github.io/classrep/4hw/',
  },
];

export default projects;
