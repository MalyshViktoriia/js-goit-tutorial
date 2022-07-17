// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;

// apartment.location = {
//     country: "Jamaica",
//    city: "Kingston",
// }
// console.log(apartment);



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let item in apartment) {

//   if (apartment.hasOwnProperty(item)) {
//     keys.push(item);
   
//     values.push(apartment[item]);
 
//   }
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (let key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount++;

    
//   }
// }
//   // Change code above this line
//   return propCount;
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (let key in salaries) {
//     totalSalary += salaries[key];
//   }

//   // Change code above this line
//   return totalSalary;
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
 
 

// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }

//   }
  
// }

//   // Change code above this line

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }

  

//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice += product.price * product.quantity;
//     }


// }


  // Пиши код выше этой строки


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {

//   today:

//   { high,

//     low,

//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } }
//   = forecast;
// console.log(high);
// console.log(low);
// console.log(icon);


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {
//     completed,
//     category,
//     priority,
//     ...data,
//   };


//   // Change code above this line
// }

// function add(...args) {
//   let sum = 0;
//   for (let item of args) {
    
//     sum += item;

//   }
// }

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const index = this.books.indexOf(oldName);
//     this.books[index] = newName;
//   }
// const bookIndex = this.books.indexOf(oldName);
// this.books.splice(bookIndex, newName);


//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index, 1);
//   }
  

//     // Change code above this line
//   }
// ;