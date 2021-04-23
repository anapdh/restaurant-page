const Navbar = () => {

  const navbarContent = document.createElement('div');
  navbarContent.setAttribute('class', 'container');

  const navbarText = document.createElement('h3');
  navbarText.setAttribute('class', 'h3 my-3');
  navbarText.innerHTML = 'gdfhhgh.';

  navbarContent.appendChild(navbarText);

  return navbarContent;

};

export default Navbar;