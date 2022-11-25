export const select = {
  templateOf: {
    productList: '#template-products',
  },
  brand: {
    rights: '#brandright a',
  },
  containerOf: {
    productList: '#product-list',
    sides: '#sides',
    newForm: '.newForm',
    names: '#name',
    titles: '[name="title"]',
    messages: '[name="message"]',

  },
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
    orders: 'orders',
  },

};


export const activeElements = {
  sides: {
    active: 'active',
  },

};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
