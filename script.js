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
    // toUpperCase to make all flavors[i] uppercases no matter what the user puts in for neat/concise list.
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

