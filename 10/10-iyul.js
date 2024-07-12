const first = prompt(
  "push, pop, shift, unshift, splice, slice, indexOf, concat, find , Enter one of the given :"
);

let second = prompt("Qiymat kiriting:");

const values = ["March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"];
const values2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (first == "pop") {
  //pop() method
  values.pop();
  console.log(values);
} else if (first == "push") {
  //push() method
  values.push(second);
  console.log(values);
} else if (first == "shift") {
  //shift() method
  values.shift();
  console.log(values);
} else if (first == "unshift") {
  //unshift() method
  values.unshift(second);
  console.log(values);
} else if (first == "splice") {
  //splice() method
  const index = parseInt(prompt("Joylashgan o'rnini kiriting:"));
  const deleted = parseInt(
    prompt("O'chirmoqchi bo'lgan element sonini kiriting:")
  );
  const element = prompt("Yangi element kiriting:");
  values.splice(index, deleted, element);
  console.log(values);
} else if (first == "slice") {
  //slice() method
  const index = parseInt(second);
  const sliced = values.slice(index);
  console.log(sliced);
} else if (first == "indexOf") {
  //indexOf() method
  const index = values.indexOf(second);
  console.log(index);
} else if (first == "find") {
  //find() method
  const qiymat = parseInt(second);
  const found = values2.find((element) => element > qiymat);
  console.log(found);
} else if (first == "concat") {
  //concat() method
  const arr1 = [second];
  const arr2 = values.concat(arr1);
  console.log(arr2);
} else {
  console.log("Berilganlardan birini kiriting.");
}
