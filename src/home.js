const Home = () => {

  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'container mt-5');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'm-2');
  homeHeader.textContent = 'My Restaurant';

  const homeImage = document.createElement('img');
  homeImage.setAttribute('class', 'bg-image');
  homeImage.setAttribute('src', '/assets/imgs/pf-br.jpg');

  const homeParagraph = document.createElement('p');
  homeParagraph.setAttribute('class', 'm-2');
  homeParagraph.textContent = 'CONTENT heree';


  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeImage);
  homeContent.appendChild(homeParagraph);

  return homeContent;
  
};

export default Home;