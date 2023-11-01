//creeate a prompt for customers to enter list of comma - seperated ice cream flavors
// const promptForFlavors = () => {
//   const customerInput = prompt("Enter your list of Froyo flavors seperated only by commas:");
//   // use .split method to return array in column-esq format
//   return customerInput.split(",");
// }


// const promptForFlavors = () => {
//   // Use alert to display a message
//   alert("Enter your list of Froyo flavors separated only by commas:");

//   // Use prompt to get user input
//   const customerInput = prompt("Froyo flavors:");

//   // Use .split method to return an array in column-esque format
//   return customerInput.split(",");
// }



// // call promptForFlavors & store flavors in froyoFlavors variable
// const froyoFlavors = promptForFlavors();

// // function to count the occurrences of each flavor
// const countFlavors = (flavors) => {
//   // create empty object to store each flavor in
//   const flavorCounts = {};
//   // create for loop to iterate through flavors
//   for (let i = 0; i < flavors.length; i++) {
//     // count the occurences of each flavor and store in flavorCounts object
//     let flavor = flavors[i];
//     flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
//   }
//   // return the flavorCounts object
//   return flavorCounts;
// }



// // call promptForFlavors & store flavors in froyoFlavors variable
// const froyoFlavors = prompt();
// // call countFlavors function with froyoFlavors array using flavorCounts object 
// const flavorCounts = countFlavors(froyoFlavors);



// // console.log a summary of order
// console.log("Order Summary:");
// // for loop to iterate over flavorCounts object using object.entries method (found on MDN)
// for (const [flavor, count] of Object.entries(flavorCounts)) {
//   // console.log each flavor and that flavors count (i.e. chocolate x3)
//   console.log(`${flavor}: x${count}`);
// }



const promptForFlavors = () => {
  // Use alert to display a message
  alert("Enter your list of Froyo flavors separated only by commas:");

  // Use prompt to get user input
  const customerInput = prompt("Froyo flavors:");

  // Use .split method to return an array in column-esque format
  return customerInput.split(",");
}

// call promptForFlavors & store flavors in froyoFlavors variable
const froyoFlavors = promptForFlavors();

// function to count the occurrences of each flavor
const countFlavors = (flavors) => {
  // create empty object to store each flavor in
  const flavorCounts = {};
  // create for loop to iterate through flavors
  for (let i = 0; i < flavors.length; i++) {
    // 
    let flavor = flavors[i].toUpperCase();
    // count the occurrences of each flavor and store in flavorCounts object
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  }
  // return the flavorCounts object
  return flavorCounts;
}

// call countFlavors function with froyoFlavors array using flavorCounts object 
const flavorCounts = countFlavors(froyoFlavors);

// console.log a summary of the order
console.log("Froyo Order Summary:");
// for loop to iterate over flavorCounts object using object.entries method (found on MDN)
for (const [flavor, count] of Object.entries(flavorCounts)) {
  // console.log each flavor and that flavor's count (i.e., chocolate x3)
  console.log(`${flavor}: x${count}`);
}














// // Prompt user for Froyo flavors
// const customerInput = prompt("Enter your list of Froyo flavors separated only by commas:");
// const froyoFlavors = customerInput.split(",");

// // Count the occurrences of each flavor
// const flavorCounts = {};
// for (let i = 0; i < froyoFlavors.length; i++) {
//   let flavor = froyoFlavors[i];
//   flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
// }

// // Display order summary
// console.log("Order Summary:");
// for (const [flavor, count] of Object.entries(flavorCounts)) {
//   console.log(`${flavor}: x${count}`);
// }



