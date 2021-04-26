const Contact = () => {
  const contactContent = document.createElement('div');
  contactContent.setAttribute('class', 'container');

  const contactHeader = document.createElement('h1');
  contactHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  contactHeader.innerHTML = 'CONTACT';

  const contactAddress = document.createElement('h5');
  contactAddress.setAttribute('id', 'contact-ad');
  contactAddress.setAttribute('class', 'text-center');
  contactAddress.innerHTML = 'Address: 2160 Haines Ave. Rapid City, SD 57701';

  const contactParagraph = document.createElement('p');
  contactParagraph.setAttribute('class', 'my-3 pb-3 text-center');
  contactParagraph.innerHTML = 'Phone: 605-394-0338';

  contactContent.appendChild(contactHeader);
  contactContent.appendChild(contactAddress);
  contactContent.appendChild(contactParagraph);

  return contactContent;
};

export default Contact;