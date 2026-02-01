
// 8a

const product = {

  name: 'basketball',
  price: '2095 cents',
  ['delivery-time']: '3 days'

}

// console.log(product);


// 8b

product.price = '500 cents';

// console.log(`Updated Price ${product.price}`);

// console.log(product);

// console.log(product['delivery-time']);

function comparePrice(product1, product2){

  if(product1.price < product2.price){

    console.log(`The Product 1 is less expensive the price is ${product1} and the other is ${product2}`);

  }else {

    console.log(`The Product 1 is less expensive the price is ${product1} and the other is ${product2}`);


  }


}

