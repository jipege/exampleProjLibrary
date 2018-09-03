const { BOOK_NAME, BOOK_AUTHOR } = require('../consts/book.js');

const hasErrors = errors => JSON.stringify(errors) !== JSON.stringify({});

const isValidBook = book => {
  
  const errors = {};

  if (!book) {
    errors.user = "Данные о книге не обнаружены";
  } else if (typeof book !== "object") {
    errors.user = "Некорректный тип данных";
  }

  /*if (!book[BOOK_NAME]) {
    *errors[BOOK_NAME] = "Название не было передано";
  }*/

  if (!book[BOOK_AUTHOR]) {
    errors[BOOK_AUTHOR] = "Имя автора не заполнено";
  } else if (typeof book[BOOK_AUTHOR] !== "string") {
    errors[BOOK_AUTHOR] = "Неверный формат";
  }

  if (hasErrors(errors)) {
    return errors;
  }

  return true;
};

module.exports = isValidBook;
