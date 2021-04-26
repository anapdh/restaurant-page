import '../assets/styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Menu from './menu';
import Navbar from './navbar';
import Contact from './contact';

const content = document.getElementById('content');
const navbar = Navbar();
content.appendChild(navbar);
const home = Home();
content.appendChild(home);

// NAVBAR CLICKING

const menu = Menu();
const contact = Contact();

const link1 = document.getElementById('home');
link1.addEventListener('click', () => {
  content.replaceChild(home, content.childNodes[1]);
});

const link2 = document.getElementById('menu');
link2.addEventListener('click', () => {
  content.replaceChild(menu, content.childNodes[1]);
});

const link3 = document.getElementById('contact');
link3.addEventListener('click', () => {
  content.replaceChild(contact, content.childNodes[1]);
});
