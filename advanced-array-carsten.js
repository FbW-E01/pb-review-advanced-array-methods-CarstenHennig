// # Review - Advanced array methods

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use advanced array methods for all of these (forEach, map, etc.). You might have to search for an appropriate method to use on MDN.

// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.
const array1 = [
  { name: "foo", url: "http://www.foo.com", number: 123 },
  { name: "bar", url: "http://www.bar,com", number: 104 },
  { name: "baz", url: "http://www.baz.com", number: 97 },
  { name: "qux", url: "http://www.qux.com", number: 126 },
  { name: "fab", url: "http://www.fab.com", number: 211 },
  { name: "flip", url: "http://www.flip", number: 999 },
  { name: "flop", url: "http://www.flop", number: 3 },
  { name: "flush", url: "http://www.flush", number: 35 },
  { name: "cab", url: "http://www.cab", number: 131 },
  { name: "cheese", url: "http://www.cheese", number: 725 },
];

// 2. Then based on the array, create a new array that contains just the names.
const arrayNames = array1.forEach(function (n) {
  console.log(n.name);
});

// 3. Go through the array and check each individual URL property -
// if the URL starts with "http", print the URL.
// Otherwise, print "Invalid URL for" and the value of the name property.
const checkURL = array1.forEach(function (n) {
  let urlNow = n.url;
  if (urlNow.substr(0, 4) === "http") {
    console.log(n.url);
  } else {
    console.log("Invalid URL for " + n.name);
  }
});

// 4. Sort the array based on the "number" property to a random order.
// const sortedArray = array1.sort();
// console.log(sortedArray);
array1.sort(function () {
  return Math.round(Math.random() * 9) - 5;
  //  console.log(this.number);
});
console.log(array1);

// 5. Sort the array based on the "number" property, with the lowest number first.
array1.sort(function (a, b) {
  //  console.log(a);
  if (a.number > b.number) {
    return 1;
  } else if (b.number > a.number) {
    return -1;
  } else {
    return 0;
  }
});
console.log(array1);

// 6. Sort the array based on the "number" property, with the highest number first.
array1.sort(function (a, b) {
  if (a.number < b.number) {
    return 1;
  } else if (b.number < a.number) {
    return -1;
  } else {
    return 0;
  }
});
console.log(array1);

// 7. Based on the array, create a string with all of the names of the people in the array
// separated by a comma and then replace the last comma with the string `" and "`.
const sortedByName = array1.map(function (a) {
  return a.name;
});
const stringArray = sortedByName.join(", ");
const splittedLastComma = stringArray.replace("flush,", "flush and");
console.log(splittedLastComma);
