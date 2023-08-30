import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CONTENT_URL } from '../constants';

const getData = async () => {
    // console.log(`Enviroment [${process.env.NODE_ENV}] Content url [${CONTENT_URL}]`);
    // let content = null; 
    // try {      
    //   let res = await fetch(CONTENT_URL);        
    //   content = await res.json();
    //   console.log(`Loaded remote footer content`, content);
    // } catch (error) {
    //   throw new Error(`Unable to fetch footer content ${error.message}`, error);
    // }

    return JSON.parse('{"sections":[{"name":"Customer service","id":"footer-customer-service","links":[{"text":"Contact us","href":"https://www.just-eat.co.uk/help","alt":"","rel":"","target":"","gtmLabel":""},{"text":"Log in","href":"https://www.just-eat.co.uk/account/login","alt":"","rel":"","target":"","gtmLabel":""},{"text":"Sign up","href":"https://www.just-eat.co.uk/account/register","alt":"","rel":"","target":"","gtmLabel":"click_service_signup"},{"text":"My account","href":"/account/info","alt":"","rel":"","target":"","gtmLabel":"click_service_account"},{"text":"Mobile apps","href":"/info/apps","alt":"","rel":"","target":"","gtmLabel":"click_service_apps"},{"text":"Redeem a Giftcard","href":"https://www.just-eat.co.uk/giftcards/redeem","alt":"","rel":"","target":"","gtmLabel":""},{"text":"Buy a Giftcard","href":"https://giftcards.just-eat.co.uk","alt":"","rel":"","target":"","gtmLabel":""},{"text":"Local Legends","href":"https://www.just-eat.co.uk/blog/local/local-legends-the-best-takeaways-in-your-area","alt":"","rel":"","target":"","gtmLabel":"click_service_local_legends"}]},{"name":"Top cuisines","id":"footer-top-cuisines","links":[{"text":"Chinese","href":"/takeaway/nearme/chinese","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_chinese"},{"text":"Fish \u0026 Chips","href":"/takeaway/nearme/fish-and-chips","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_fish_and_chips"},{"text":"Indian","href":"/takeaway/nearme/indian","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_indian"},{"text":"Pizza","href":"/takeaway/nearme/pizza","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_pizza"},{"text":"Italian","href":"/takeaway/nearme/italian","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_italian"},{"text":"Kebabs","href":"/takeaway/nearme/kebabs","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_kebabs"},{"text":"Sushi","href":"/takeaway/nearme/sushi","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_japanese"},{"text":"View all cuisines","href":"/takeaway/nearme","alt":"","rel":"","target":"","gtmLabel":"click_cuisine_view_all"}]},{"name":"Popular locations","id":"footer-popular-locations","links":[{"text":"London","href":"/takeaway/london","alt":"","rel":"","target":"","gtmLabel":"click_location_london"},{"text":"Manchester","href":"/takeaway/manchester","alt":"","rel":"","target":"","gtmLabel":"click_location_manchester"},{"text":"Birmingham","href":"/takeaway/birmingham","alt":"","rel":"","target":"","gtmLabel":"click_location_birmingham"},{"text":"Leeds","href":"/takeaway/leeds","alt":"","rel":"","target":"","gtmLabel":"click_location_leeds"},{"text":"Glasgow","href":"/takeaway/glasgow","alt":"","rel":"","target":"","gtmLabel":"click_location_glasgow"},{"text":"View all locations","href":"/takeaway","alt":"","rel":"","target":"","gtmLabel":"click_location_view_all"}]},{"name":"Top brands","id":"footer-top-brands","links":[{"text":"McDonald\u0027s","href":"/takeaway/brands/mcdonalds","alt":"","rel":"","target":"","gtmLabel":"click_brands_mcdonalds"},{"text":"KFC","href":"/takeaway/brands/kfc","alt":"","rel":"","target":"","gtmLabel":"click_brands_kfc"},{"text":"Burger King","href":"/takeaway/brands/burgerking","alt":"","rel":"","target":"","gtmLabel":"click_brands_burger_king"},{"text":"Greggs","href":"/takeaway/brands/greggs","alt":"","rel":"","target":"","gtmLabel":"click_brands_greggs"},{"text":"Subway","href":"/takeaway/brands/subway","alt":"","rel":"","target":"","gtmLabel":"click_brands_subway"},{"text":"View all brands","href":"/takeaway/brands","alt":"","rel":"","target":"","gtmLabel":"click_brands_view_all"}]},{"name":"Get to know us","id":"footer-get-to-know-us","links":[{"text":"Restaurant sign up","href":"https://restaurants.just-eat.co.uk/","alt":"","rel":"","target":"","gtmLabel":"click_about_restaurant_signup"},{"text":"About us","href":"https://www.justeattakeaway.com/","alt":"","rel":"","target":"","gtmLabel":"click_about_just_eat"},{"text":"Careers","href":"https://careers.justeattakeaway.com/global/en","alt":"","rel":"","target":"","gtmLabel":"click_about_careers"},{"text":"Deliver with Just Eat","href":"/explore/delivering-with-just-eat","alt":"","rel":"","target":"","gtmLabel":"click_about_couriers_signup"},{"text":"Just Eat for Business","href":"https://business.just-eat.co.uk/","alt":"","rel":"","target":"","gtmLabel":"click_about_justeatforbusiness"},{"text":"Price promise","href":"/pricepromise","alt":"","rel":"","target":"","gtmLabel":"click_service_price_promise"},{"text":"Privacy Policy","href":"/info/privacy-policy","alt":"","rel":"","target":"","gtmLabel":"click_about_privacy_policy"},{"text":"Terms and Conditions","href":"/info/terms-and-conditions","alt":"","rel":"","target":"","gtmLabel":"click_about_tandcs"},{"text":"Cookie Policy","href":"/info/cookies-policy","alt":"","rel":"","target":"","gtmLabel":"click_about_cookie_policy"},{"text":"Modern Slavery Statement","href":"/Files/Common/legal/modern-slavery-statement/Just Eat Modern Slavery Statement 2020","alt":"Modern Slavery Statement","rel":"","target":"_blank","gtmLabel":"click_about_modern_slavery_statement"},{"text":"Gender Pay Gap 2019-2021","href":"https://www.just-eat.co.uk/CmsAssets/media/Files/Common/legal/gender-pay-gap/gender-pay-gap-2019-2021","alt":"","rel":"","target":"","gtmLabel":""},{"text":"Ethics hotline","href":"https://app.convercent.com/en-GB/LandingPage/d8e86634-ec59-ec11-a985-000d3ab9f296","alt":"","rel":"","target":"_blank","gtmLabel":"click_ethics_hotline"}]}]}');
};

// Mount function to start up the app
const mount = async (el) => {
  //const footerContent = await getData();
  //console.log('Footer content: ', footerContent);
  //ReactDOM.render(<App data={footerContent} />, el);
  ReactDOM.render(<App />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_footer-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
