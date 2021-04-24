const Navbar = () => {

  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar');

  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'list-unstyled')

    // const navList = () => {
    //   const list = document.createElement('li');
    //   list.setAttribute('class', 'nav-item')
  
    //     const navLink1 = document.createElement('a');
    //     navLink1.setAttribute('id', 'home')
    //     navLink1.setAttribute('class', 'home')
    //     navLink1.setAttribute('href', '#')
    //     navLink1.innerHTML = 'Home';

    //     const navLink2 = document.createElement('a');
    //     navLink2.setAttribute('id', 'menu')
    //     navLink2.setAttribute('class', 'menu')
    //     navLink2.setAttribute('href', '#')
    //     navLink2.innerHTML = 'Menu';

    //     const navLink3 = document.createElement('a');
    //     navLink3.setAttribute('id', 'contact')
    //     navLink3.setAttribute('class', 'contact')
    //     navLink3.setAttribute('href', '#')
    //     navLink3.innerHTML = 'Contact';
    // };

  // navbarContent.appendChild(navLink1);
  // navbarContent.appendChild(navLink2);
  // navbarContent.appendChild(navLink3);

  return navbarContent;

};

export default Navbar;