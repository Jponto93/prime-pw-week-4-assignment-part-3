console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];

const maxItems = 5;
//-------------------------------------------------------
const isFull = () => { //Checking if basket is full
  if (basket.length >= maxItems){
    return true;
  } else if (basket.length < maxItems){
    return false;
  }
};
//------------------------------------------------------------
const addItem = (item) => { //Function to addItem to basket
 if (isFull()===true){
   return 'Your cart is full.'
 } else if (isFull()===false){
   basket.push(item); return true;
 }
};
//------------------------------------------------------------
const removeItem = (arr, element) => { //Function to remove item from basket
  const index = arr.indexOf(element);
  console.log('Starting remove item function');

  if (index !== -1){
    console.log('Removing', element);
    basket.splice(index, 1); return true;
  } else if (index === -1){
    return null;
  }
}
//------------------------------------------------------------
const empty = () => { //Function to empty basket
 let i = 0;
 while (i < basket.length){
   basket.pop();
 }
};
//------------------------------------------------------------
const listItems = () => { //Function to list each element in basket
  for (let el of basket){ //Repeat for each element of the array.
    console.log(el); //Individually log each element of the array.
  }
};
//------------------------------------------------------------
//Testing max items in basket and if basket is full
console.log('How many items can the cart hold? ' + maxItems);
console.log(`Basket is (if blank then empty)${basket}`);
console.log('Adding potato. (expect true)',  addItem('potato'));
console.log(`Basket is now ${basket}`);
console.log('Is the cart full? (expect false) ' + isFull());
//Filling basket
console.log('Adding 4 items, broccoli, cheese, bread, and chips');
addItem('broccoli');
addItem('cheese');
addItem('bread');
addItem('chips');

console.log('Basket is now: ' + basket); //Should display all items added to basket.
console.log('Is the cart full? (expect true) ' + isFull());
console.log('This is what happens when we try another item (should be full)');
console.log(addItem('salad'));

console.log('Function listing items:',);

listItems(); //Calling the function, performing a separate log for each item.

console.log(`basket prior to remove item attemps: ${basket}`);
console.log('Attempt to remove non-existing item: ', removeItem(basket,'cabbage'));
console.log(removeItem(basket,'chips'));
console.log('basket is now: ', basket);

console.log('Before emptying basket attempt:', basket);
empty();
console.log('After emptying basket: (expect empty array)', basket);
console.log('Using isFull function to check if basket is full: (expect false) '); console.log(isFull());
