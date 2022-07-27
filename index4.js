// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);


// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2


// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });


// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }

//     totalPrice.forEach(
//         function (item) {
//             totalPrice += item;
//         }
//     );
//     // Change code above this line
//     return totalPrice;
// }

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//   // Change code below this line
//     commonElements.forEach(
//         function (item) {
//             commonElements.push(item);
//         }

//     )

// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }



//   return commonElements;

// commonElements.forEach(item => {


//     if (secondArray.includes(item)) {
//         commonElements.push(item);
//     }
//     if (secondArray.includes(firstArray[item])) {
//       commonElements.push(firstArray[item]);
//     }
// })

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//     commonElements.forEach(element
//         => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }

//     if (secondArray.includes(firstArray(item))) {
//         commonElements.push(item);
//     }
//   })

//   return commonElements;


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.secondArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//     return commonElements;

//   }
//   )
// }

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   })
//   return commonElements;
// }


// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   }
//   )
//   return totalPrice;


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item;
//   // });

//   orderedItems.forEach
//     (item => {
//       totalPrice += item;
//     }
//   )
//   return totalPrice;
    
    
//     ((item) => { totalPrice += item });

//   return totalPrice;
// }

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   numbers.forEach(function (item) {
//     if (item % 2 === 0) {
//       item = item + value;
//     }
//   }
// }
//   // Change code above this line
// }

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// const allGenres = books.flatMap(genre => genre.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);


// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);

// };

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
  
// };

// const getFriends = (users) => {
//   users.flatMap(user => user.friends);

//   return getFriends.filter
//     (friend => friend.friends.includes(user.name));
  
    
//     ((user, index, array) => array.indexOf(user) === index)

  
// };

// const getTotalFriendCount = users => {


//   return users.reduce((total, user) => total + user.friends.length, 0);

// };