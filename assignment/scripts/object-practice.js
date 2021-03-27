console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Chloe',
  lastName: 'Everson',
  hasSiblings: true,
  shoeCount: 12,
  favThreeFoods: ['mac & cheese', 'thai red curry' , 'tahini']
};
//created object literal for me object with 5 different properties with values to those properties
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = (me.firstName + ' ' + me.lastName);
console.log('full name:' , fullName);
//created variable full name by accessing first and last name properties of me object. accessed through dot operation

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('first favorite food:' , me.favThreeFoods[0]);
console.log('last favorite food:' , me.favThreeFoods[2]);
//added logs of first and last favorite food to console - seperately by accessing the nested arrays through dot operation for property of me object.

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log('shoe count:' , me.shoeCount);
me.shoeCount += 1;
console.log('added pair, now shoe count:' , me.shoeCount);
//logged shoe count to console. added a pair then logged new shoe count to console.

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log(me);
//added new property to me object - favorite color - with value blue.
//logged me object to console.
