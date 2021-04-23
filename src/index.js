import '../assets/styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './home';

const content = document.getElementById('content');
const home = Home();
content.appendChild(home);
