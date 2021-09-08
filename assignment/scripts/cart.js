console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];

const maxItems = 5;

const isFull = () => {
  if (basket.length >= maxItems){
    return true;
  } else if (basket.length < maxItems){
    return false;
  }
};

const addItem = (item) => {
    basket.push(item)
};

console.log(`Basket is ${basket}`);
console.log('Adding potato (expect true)', addItem('potato'));
console.log(`Basket is now ${basket}`);

addItem('broccoli');
addItem('cheese');
addItem('sandwich');
addItem('chips');

console.log(basket); //Should display all items added to basket.
console.log(isFull());
console.log('Function listing items:',);
const listItems = () => {
  for (let el of basket){ //Repeat for each element of the array.
    console.log(el); //Individually log each element of the array.
  } return true;
};

listItems(); //Calling the function, performing a separate log for each item.

const empty = () => {
  let i = 0;
  while (i < basket.length){
    basket.pop();
  }
};

console.log('Before emptying basket:', basket);
empty();
console.log('After emptying basket:', basket);
console.log(isFull());
