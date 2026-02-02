
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

//8c

// console.log(product['delivery-time']);


//8d

const product1 = {

  name: 'basketball',
  price: 2095,
  ['delivery-time']: '3 days'
}

const product2 = {

  name: 'basketball',
  price: 2095,
  ['delivery-time']: '5 days'

}


function comparePrice(product1, product2){

  if(product1.price < product2.price){

    console.log(`The Product 1 is less expensive the price is ${product1.price} and the other is ${product2.price}`);

  }else {

    console.log(`The Product 2 is less expensive the price is ${product2.price} and the other is ${product1.price}`);


  }


}

// comparePrice(product1,product2);


// 8e

function isSameProduct(product1,product2){

  if(product1.name === product2.name && product1.price === product2.price){

    return true;
  }else{
    return false;
  }

}


console.log(isSameProduct(product1,product2));

