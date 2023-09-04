const UK_FOOTER_CONTENT_URL = 'https://mfe-component.s3.eu-west-1.amazonaws.com/uk-footer.json';

export const getData = async () => {
  let content = null; 
  try {      
    let res = await fetch(UK_FOOTER_CONTENT_URL); // cached on server only by default        
    content = await res.json();
  } catch (error) {
    throw new Error(`Unable to fetch footer content ${error.message}`, error);
  }

  return content;
};