// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для Each і стрілочні функції.
 */

const logItems = items => {
  items.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);