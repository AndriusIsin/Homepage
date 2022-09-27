var Pear, total, Apple, basket, subtotal, Pineapple, my_40, my_20, strawberry, Cherry, watermelon, promo, item, delivery;

// Describe this function...
function delivery2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (subtotal.reduce((a,b) => a+b, 0) >= my_20) {
    let element_delivery = document.getElementById('delivery');
    element_delivery.innerText = '£0';
  } else {
    let element_delivery2 = document.getElementById('delivery');
    element_delivery2.innerText = '£2.99';
  }
}

// Describe this function...
function promo_code() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (subtotal.reduce((a,b) => a+b, 0) >= my_40) {
    let element_promo = document.getElementById('promo');
    element_promo.innerText = 'promo code applied successfully';
  } else {
    let element_promo2 = document.getElementById('promo');
    element_promo2.innerText = 'order under £40';
  }
}

// Describe this function...
function print2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list8 = document.getElementById('list');
  element_list8.replaceChildren();
  element_list8.innerText = basket;
  let element_subtotal8 = document.getElementById('subtotal');
  element_subtotal8.innerText = 0;
  let element_delivery5 = document.getElementById('delivery');
  element_delivery5.innerText = 2.99;
  let element_total = document.getElementById('total');
  element_total.innerText = 0;
  let element_promo3 = document.getElementById('promo');
  element_promo3.innerText = 'order under £40';
}


Pear = ['🍐Pear', 10];
Apple = ['🍎Apple', 15];
Pineapple = ['🍍Pineapple', 16];
strawberry = ['🍓Strawberry', 11];
Cherry = ['🍒Cherry', 18];
watermelon = ['🍉Watermelon', 18];
promo = [-10];
subtotal = [];
basket = [];
delivery = [2.99];
my_20 = [20];
my_40 = [40];
total = [];
print2();


document.getElementById('button1').addEventListener('click', (event) => {
  basket.push(Pear[0]);
  subtotal.unshift(Pear.slice(-1)[0]);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = Pear[0];

  element_list.appendChild(new_li);
  let element_subtotal = document.getElementById('subtotal');
  element_subtotal.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('button2').addEventListener('click', (event) => {
  basket.push(Apple[0]);
  subtotal.unshift(Apple.slice(-1)[0]);
  let element_list2 = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = Apple[0];

  element_list2.appendChild(new_li2);
  let element_subtotal2 = document.getElementById('subtotal');
  element_subtotal2.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('button3').addEventListener('click', (event) => {
  basket.push(Pineapple[0]);
  subtotal.unshift(Pineapple.slice(-1)[0]);
  let element_list3 = document.getElementById('list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = Pineapple[0];

  element_list3.appendChild(new_li3);
  let element_subtotal3 = document.getElementById('subtotal');
  element_subtotal3.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('button4').addEventListener('click', (event) => {
  basket.push(strawberry[0]);
  subtotal.unshift(strawberry.slice(-1)[0]);
  let element_list4 = document.getElementById('list');
  let new_li4 = document.createElement('li');
  new_li4.innerText = strawberry[0];

  element_list4.appendChild(new_li4);
  let element_subtotal4 = document.getElementById('subtotal');
  element_subtotal4.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('button5').addEventListener('click', (event) => {
  basket.push(Cherry[0]);
  subtotal.unshift(Cherry.slice(-1)[0]);
  let element_list5 = document.getElementById('list');
  let new_li5 = document.createElement('li');
  new_li5.innerText = Cherry[0];

  element_list5.appendChild(new_li5);
  let element_subtotal5 = document.getElementById('subtotal');
  element_subtotal5.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('button6').addEventListener('click', (event) => {
  basket.push(watermelon[0]);
  subtotal.unshift(watermelon.slice(-1)[0]);
  let element_list6 = document.getElementById('list');
  let new_li6 = document.createElement('li');
  new_li6.innerText = watermelon[0];

  element_list6.appendChild(new_li6);
  let element_subtotal6 = document.getElementById('subtotal');
  element_subtotal6.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});
if (subtotal >= 20) {
  let element_delivery3 = document.getElementById('delivery');
  element_delivery3.innerText = '£0';
} else {
  let element_delivery4 = document.getElementById('delivery');
  element_delivery4.innerText = '£2.99';
}


document.getElementById('delete').addEventListener('click', (event) => {
  subtotal.pop();
  let element_list7 = document.getElementById('list');
  element_list7.replaceChildren();
  basket.pop();
  basket.forEach((item) => {
    let new_li7 = document.createElement('li');
    new_li7.innerText = item;

    element_list7.appendChild(new_li7);
  });
  let element_subtotal7 = document.getElementById('subtotal');
  element_subtotal7.innerText = subtotal.reduce((a,b) => a+b, 0);
  delivery2();
  promo_code();

});

document.getElementById('restart').addEventListener('click', (event) => {
  total = [];
  basket = [];
  subtotal = [];
  print2();

});

document.getElementById('check').addEventListener('click', (event) => {
  if (subtotal.reduce((a,b) => a+b, 0) > my_40) {
    total.push(promo[0]);
  }
  if (subtotal.reduce((a,b) => a+b, 0) < my_20) {
    total.push(delivery[0]);
  }
  while (!!subtotal.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    total.push(subtotal.shift());
  }
  let element_total2 = document.getElementById('total');
  element_total2.innerText = total.reduce((a,b) => a+b, 0);

});
var value, pay, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


value = getNumberOrString(document.getElementById('menu').value);
pay = ['Visa 💳', ' PayPal  💸', 'Apple Pay '];


document.getElementById('menu').addEventListener('click', (event) => {
  if (value == 'open') {
    let element_list2 = document.getElementById('list2');
    element_list2.replaceChildren();
    pay.forEach((item) => {
      let element_list22 = document.getElementById('list2');
      let new_li = document.createElement('li');
      new_li.innerText = item;

      element_list22.appendChild(new_li);
    });
    value = 'close';
  } else {
    let element_list23 = document.getElementById('list2');
    element_list23.replaceChildren();
    value = 'open';
  }

});
