var first = prompt("Istalgan so'zlar yoki raqamlarni kiriting: ");
var second = prompt("Istalgan format turini tanlang (a-z,z-a,0-9,9-0): ");

if (second == "a-z") {
  var sorted = first.split(" ").sort();
  console.log(sorted);
} else if (second == "z-a") {
  var sorted = first.split(" ").sort().reverse();
  console.log(sorted);
} else if (second == "0-9") {
  var sorted = first.split(" ").sort();
  console.log(sorted);
} else if (second == "9-0") {
  var sorted = first.split(" ").sort().reverse();
  console.log(sorted);
} else {
  console.log("Xato, qayta urinib ko'ring.");
}

//"Madina", "LObar", "Alisher", "Otabek"
