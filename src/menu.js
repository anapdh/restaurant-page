const Menu = () => {

  const menuContent = document.createElement('div');
  menuContent.setAttribute('class', 'container');

  const menuHeader = document.createElement('h1');
  menuHeader.setAttribute('class', 'text-center my-3 pt-3');
  menuHeader.innerHTML = 'My Restaurant';

  const menuImage = document.createElement('img');
  menuImage.setAttribute('class', 'bg-image');
  menuImage.setAttribute('src', '/assets/imgs/pf-br.jpg');

  const menuText = document.createElement('h3');
  menuText.setAttribute('class', 'h3 my-3');
  menuText.innerHTML = 'Themost famous plates in the world are now ready for you.';

  const menuParagraph = document.createElement('p');
  menuParagraph.setAttribute('class', 'm-3 pb-3');
  menuParagraph.innerHTML = 'Check out our menu.';

  menuContent.appendChild(menuHeader);
  menuContent.appendChild(menuImage);
  menuContent.appendChild(menuText);
  menuContent.appendChild(menuParagraph);

  return menuContent;

};

export default Menu;