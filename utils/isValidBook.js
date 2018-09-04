const { BOOK_TITLE, BOOK_AUTHOR } = require("../consts/book");

const hasErrors = errors => JSON.stringify(errors) !== JSON.stringify({});

const isValidBook = book => {
  const errors = {};

  if (!book) {
    errors.book = "Данные о книге не обнаружены";
  } else if (typeof book !== "object") {
    errors.book = "Некорректный тип данных";
  }

  if (!book[BOOK_TITLE]) {
    errors[BOOK_TITLE] = "Название не было передано";
  }

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
