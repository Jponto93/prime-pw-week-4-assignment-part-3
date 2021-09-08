console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];

const maxItems = 5;
console.log('How many items can the cart hold? ' + maxItems);

const isFull = () => {
  if (basket.length >= maxItems){
    return true;
  } else if (basket.length < maxItems){
    return false;
  }
};

const addItem = (item) => {
 if (isFull()===true){
   return 'Your cart is full.'
 } else if (isFull()===false){
   basket.push(item); return true;
 }
};

console.log(`Basket is (if blank then empty)${basket}`);
console.log('Adding potato. (expect true)',  addItem('potato'));
console.log(`Basket is now ${basket}`);
console.log('Is the cart full? ' + isFull());

console.log('Adding 4 items, broccoli, cheese, bread, and chips');
addItem('broccoli');
addItem('cheese');
addItem('bread');
addItem('chips');

console.log('Basket is now: ' + basket); //Should display all items added to basket.
console.log('Is the cart full? ' + isFull());
console.log('This is what happens when we try another item ');
console.log(addItem('salad'));

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
console.log('Using isFull function to check if basket is full: '); console.log(isFull());
