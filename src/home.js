
const Home = () => {

  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'homepage container-fluid');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'home-header');
  homeHeader.innerHTML = 'RESTAURANT';

  const homeText = document.createElement('h3');
  homeText.setAttribute('class', 'home-text h3');
  homeText.innerHTML = 'A better experience for the most famous dishes.';

  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeText);

  return homeContent;

};

export default Home;