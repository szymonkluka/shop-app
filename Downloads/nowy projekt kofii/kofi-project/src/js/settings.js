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
    discoverBtn: '.maintitle a',
    contact: '#contact',
    submitBtn: 'form button',
    newForm: '.newForm',
    names: '[name="name"]',
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

export const showElements = {
  home: ['products', 'home'],
  products: ['products'],
  contact: ['contact'],
};

export const classNames = {
  sides: {
    active: 'active',
  },
  input: {
    error: 'error',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
