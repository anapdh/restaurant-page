
const Home = () => {

  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'container');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'text-center my-3 p-3');
  homeHeader.innerHTML = 'MY RESTAURANT';

  const homeImage = document.createElement('img');
  homeImage.setAttribute('class', 'bg-image');
  homeImage.setAttribute('src', '/assets/imgs/pf-br.jpg');

  const homeText = document.createElement('h3');
  homeText.setAttribute('class', 'h3 my-3 text-center p-3');
  homeText.innerHTML = 'The most famous dishes in the world ready for delivery.';

  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeImage);
  homeContent.appendChild(homeText);

  return homeContent;

};

export default Home;