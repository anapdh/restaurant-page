const Navbar = () => {
  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'navbar fixed-top');

  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'navLink');

  const navList = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const navLink1 = document.createElement('a');
    navLink1.setAttribute('id', 'home');
    navLink1.setAttribute('class', 'mx-2');
    navLink1.setAttribute('href', '#');
    navLink1.innerHTML = 'Home';
    list.appendChild(navLink1);

    const navLink2 = document.createElement('a');
    navLink2.setAttribute('id', 'menu');
    navLink2.setAttribute('class', 'mx-2');
    navLink2.setAttribute('href', '#');
    navLink2.innerHTML = 'Menu';
    list.appendChild(navLink2);

    const navLink3 = document.createElement('a');
    navLink3.setAttribute('id', 'contact');
    navLink3.setAttribute('class', 'mx-2');
    navLink3.setAttribute('href', '#');
    navLink3.innerHTML = 'Contact';
    list.appendChild(navLink3);

    return list;
  };

  navbarContent.appendChild(navLinks);
  navbarContent.appendChild(navList());

  return navbarContent;
};

export default Navbar;
