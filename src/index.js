import '../assets/styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Menu from './menu';
import Navbar from './navbar';

const content = document.getElementById('content');
const navbar = Navbar();
content.appendChild(navbar);
const home = Home();
content.appendChild(home);

// FOR CLICK 

// const menu = Menu ();
// content.appendChild(menu);
// const contact = Contact();
// content.appendChild(contact);