const Menu = () => {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('class', 'container');

  const menuHeader = document.createElement('h1');
  menuHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  menuHeader.innerHTML = 'MENU';

  const menuList = document.createElement('ul');
  menuList.setAttribute('class', 'menuList');

  const menuItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const menu1 = document.createElement('h1');
    menu1.setAttribute('id', 'menu1');
    menu1.setAttribute('class', 'text-center');
    menu1.innerHTML = 'CHICKEN';
    list.appendChild(menu1);
    const menuParagraph1 = document.createElement('p');
    menuParagraph1.setAttribute('class', 'my-3 pb-3');
    menuParagraph1.innerHTML = 'We use ALWAYS FRESH, NEVER EVER FROZEN® premium chicken breast tenderloins to make the most tender chicken fingers possible.';
    list.appendChild(menuParagraph1);

    const menu2 = document.createElement('h1');
    menu2.setAttribute('id', 'menu2');
    menu2.setAttribute('class', 'text-center');
    menu2.innerHTML = 'BARBECUE';
    list.appendChild(menu2);
    const menuParagraph2 = document.createElement('p');
    menuParagraph2.setAttribute('class', 'my-3 pb-3');
    menuParagraph2.innerHTML = 'Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce: - Spicy Texas BBQ sauce - Honey BBQ sauce';
    list.appendChild(menuParagraph2);

    const menu3 = document.createElement('h1');
    menu3.setAttribute('id', 'menu3');
    menu3.setAttribute('class', 'text-center');
    menu3.innerHTML = 'FISH';
    list.appendChild(menu3);
    const menuParagraph3 = document.createElement('p');
    menuParagraph3.setAttribute('class', 'my-3 pb-3');
    menuParagraph3.innerHTML = 'Blackened salmon fillet grilled to perfection. 6 oz. Served with your choice of two sides.';
    list.appendChild(menuParagraph3);

    return list;
  };

  menuContent.appendChild(menuHeader);
  menuContent.appendChild(menuItems());

  return menuContent;
};

export default Menu;