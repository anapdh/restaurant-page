const Home = () => {

  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'container');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'text-center my-3 pt-3');
  homeHeader.innerHTML = 'My Restaurant';

  const homeImage = document.createElement('img');
  homeImage.setAttribute('class', 'bg-image');
  homeImage.setAttribute('src', '/assets/imgs/pf-br.jpg');

  const homeText = document.createElement('h3');
  homeText.setAttribute('class', 'h3 my-3');
  homeText.innerHTML = 'Themost famous plates in the world are now ready for you.';

  const homeParagraph = document.createElement('p');
  homeParagraph.setAttribute('class', 'm-3 pb-3');
  homeParagraph.innerHTML = 'Check out our menu.';

  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeImage);
  homeContent.appendChild(homeText);
  homeContent.appendChild(homeParagraph);

  return homeContent;

};

export default Home;