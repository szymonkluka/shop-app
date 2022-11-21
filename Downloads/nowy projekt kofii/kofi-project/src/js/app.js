import { classNames, select } from './settings.js';
import Product from './Product.js';
import Contact from './Contact.js';

const app = {
  initData: function () {
    const thisApp = this;
    const url = select.db.url + '/' + select.db.products;
    thisApp.data = {};
    fetch(url)
      .then(function (responseRaw) {
        return responseRaw.json();
      })
      .then(function (parsedResponse) {
        // console.log('parsedResponse:', parsedResponse);
        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /* execute initMenu method */
        thisApp.initMenu();
      });
  },

  initMenu: function () {
    const thisApp = this;
    for (let product in thisApp.data.products) {
      new Product(thisApp.data.products[product]);
    }
  },

  initSides: function () {
    const thisApp = this;
    thisApp.sides = document.querySelector(select.containerOf.sides).children;
    console.log('thisApp.sides:', thisApp.sides);
    thisApp.brandRights = document.querySelectorAll(select.brand.rights);
    console.log('thisApp.navLinks:', thisApp.navLinks);
    
    for (let right of thisApp.brandRights) {
      right.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);
      });
    }
    let sidesHashtagId = thisApp.sides[0].id;
    console.log('thisApp.sides[0].id:', thisApp.sides[0].id);

    thisApp.activatePage(sidesHashtagId);

  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.sides) {
      if(page.id == pageId) {
        page.classList.add(classNames.sides.active);
      } else{page.classList.remove(classNames.sides.active);
      }}
    
    document.querySelector(select.containerOf.discoverBtn).setAttribute('href', '#' + [pageId][0]);

    
  },

  initContact: function () {
    const thisApp = this;
    const contactSubpage = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactSubpage);
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initSides();
    thisApp.initContact();
  },
};

app.init();
