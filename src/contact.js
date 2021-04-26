const Contact = () => {

  const contactContent = document.createElement('div');
  contactContent.setAttribute('class', 'container');

  const contactText = document.createElement('h3');
  contactText.setAttribute('class', 'h3 my-3');
  contactText.innerHTML = 'DFHIUSHFUIshfuiHSAFIUSH';

  contactContent.appendChild(contactText);

  return contactContent;

};

export default Contact;