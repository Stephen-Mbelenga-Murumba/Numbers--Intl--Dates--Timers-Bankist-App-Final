/////////////////////////////////////////////////
// LECTURES
//// Converting and checking Numbers
// Conversion
// console.log(3 / 10);
// console.log(+'23', typeof +'23'); // Output 23, 'number'
// //
// //// Parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('2.5rem'));
// //
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseFloat('1.75em'));
// // Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(23 / 0));
//
//// Check if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(23 / 0));
//
////Math & Rounding

// console.log(Math.sqrt(100));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 12, 23, 2));
// console.log(Math.max(5, 18, 12, '23', 2));

// console.log(Math.min(5, 18, 12, 23, 2));
// console.log(Math.min(5, 18, 12, 23, '2'));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);
// const randomInt = (max, min) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 21));
// //
// //// Rounding Integers
// console.log(Math.round(23.3));
// console.log(Math.round('23.3'));
// //
// console.log(Math.ceil(23.3));
// console.log(Math.ceil('23.3'));
// //
// console.log(Math.floor(-23.3));
// console.log(Math.trunc('-23.3'));

// console.log((2.7).toFixed(2));
// console.log((+'2.7').toFixed(2));
// console.log((2.7567).toFixed(2));
// console.log((2).toFixed(2));
/////////////
////// Remainder Operator (%)
// console.log(8 % 3);
// console.log(5 % 2);
// console.log(6 / 3);
// console.log(9 % 4);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements_row')].forEach((row, idx) =>
//     if (idx % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (idx % 3 === 0) row.style.backgroundColor = 'blue';

// });
// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements_row')].forEach((row, idx) => {
//     if (idx % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (idx % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });
//////////////////////
////// Numeric Separators
//// 267,460,000
// const diameter = 267_460_000;
// console.log(diameter);
// const price = 139_59;
// console.log(price);
// console.log(Math.PI);
// console.log(Number('230_000')); // NOT Recommended
// console.log(Number.parseInt('230_000'));
//////////////////////
////// Working with BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 6);
// console.log(typeof 456789302n); // n Represents BigInt
// console.log(BigInt(456789302));
// // console.log(Math.sqrt(16n)); // Not feasible
// //
// const huge = 23456789002365789301278n;
// const num = 23;
// console.log(huge * BigInt(num));
// ////Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big.');

// //// DIVISIONS

// console.log(11n / 3n);
// console.log(11 / 3);
///////////////////////////////
///// Working with Dates
// const now = new Date();
// console.log(now);
// console.log(new Date('December 26, 1994'));
// console.log(account1.movementsDates[0]);

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
////// Working with Dates
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getDate())
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(Date.now());

/////// Operation with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// //// Internationalizing Numbers

// const num = 3874365.23;
// const options = {
//   style: 'currency',
//   currency: 'USD',
// };
// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('GERMANY: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('KENYA: ', new Intl.NumberFormat('sw-KE', options).format(num));
///// Timers: setTimeout $ setInterval
// const ingredients = ['olives', 'cheese'];

//// SetTimeout
// const pizzaTimer = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕🍕.`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting ...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
///////
//// setinterval
// setInterval(function () {
//   const now = new Date();
//   console.log(
//     now.getDate(),
//     now.getHours(),
//     now.getMinutes()
//     // now.getSeconds()
//   );
// }, 1000);
