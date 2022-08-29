//todo Масив об'єктів
/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Бриліант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(array, stoneName) {
  //невірний варіант!!!!
  // for (const key in array) {
  //   if (array.hasOwnProperty(key)) {
  //     console.log('key :>> ', key);
  //   }
  // }
  for (const stone of array) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
    // console.log('stone :>> ', stone);
  }

  return 'Not found!';
}

console.log(calcTotalPrice(stones, 'Ізумруд'));
console.log(calcTotalPrice(stones, 'Цегла'));
