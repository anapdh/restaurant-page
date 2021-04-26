const Menu = () => {

  const menuContent = document.createElement('div');
  menuContent.setAttribute('class', 'container');

  const menuHeader = document.createElement('h1');
  menuHeader.setAttribute('class', 'text-center my-3 pt-3 mb-5');
  menuHeader.innerHTML = 'MENU';

  // const menuImage = document.createElement('img');
  // menuImage.setAttribute('class', 'bg-image');
  // menuImage.setAttribute('src', '/assets/imgs/pf-br.jpg');

  const menuList = document.createElement('ul');
  menuList.setAttribute('class', 'menuList')

    const menuItems = () => {
      const list = document.createElement('li');
      list.setAttribute('class', 'nav-item list-unstyled mx-2')

        const menu1 = document.createElement('h5');
        menu1.setAttribute('id', 'menu1')
        menu1.setAttribute('class', 'mx-2')
        menu1.innerHTML = 'CHICKEN';
        list.appendChild(menu1);
          let menuParagraph1 = document.createElement('p');
          menuParagraph1.setAttribute('class', 'm-3 pb-3');
          menuParagraph1.innerHTML = 'Check out our menu.';
          list.appendChild(menuParagraph1);

        const menu2 = document.createElement('h5');
        menu2.setAttribute('id', 'menu2')
        menu2.setAttribute('class', 'mx-2')
        menu2.innerHTML = 'BARBECUE';
        list.appendChild(menu2);
          const menuParagraph2 = document.createElement('p');
          menuParagraph2.setAttribute('class', 'm-3 pb-3');
          menuParagraph2.innerHTML = 'Check out our menu.';
          list.appendChild(menuParagraph2);

        const menu3 = document.createElement('h5');
        menu3.setAttribute('id', 'menu3')
        menu3.setAttribute('class', 'mx-2')
        menu3.innerHTML = 'FISH';
        list.appendChild(menu3);
          const menuParagraph3 = document.createElement('p');
          menuParagraph3.setAttribute('class', 'm-3 pb-3');
          menuParagraph3.innerHTML = 'Check out our menu.';
          list.appendChild(menuParagraph3);

        return list;
    };

  menuContent.appendChild(menuHeader);
  // menuContent.appendChild(menuImage);
  menuContent.appendChild(menuItems());
  // menuContent.appendChild(menuParagraph);

  return menuContent;

};

export default Menu;