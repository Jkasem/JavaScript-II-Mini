* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - points to the global scobe because it was invoked there, think of it as if window.whateverfunctionname();
* 2. Implicit Binding - this happens when there is a dot used in the function call AKA there is an object calling another function
* 3. new binding - when constructor creates the object this refers to the new object getting created
* 4. explicit binding - refers to when invoked with call or apply
*
* write out a code example of each explanation above
*

console.log('hello world!');

Principle 1
function invokeMeMaybe(x) {
  console.log(this, x);
}
invokeMeMaybe();
//window object

Principle 2
const pickle = {
  tickle: function(x) {
    console.log(this, x + ' hehe')
  }
}

pickle.tickle('hi');

// Principle 3
function Sheep(color, legs, sound) {
  this.color = `${color}`,
  this.legs = `${legs}`,
  this.sound = function() {
    console.log(`${sound}`)
    console.log(this)
  };
}

const bobby = new Sheep('black', 4, 'baaaaawwww');
bobby.sound();

// Principle 4
const darryl = new Sheep('white', 3, 'heeeee');
bobby.color.apply(darryl);
