const { USER_AGE, USER_NAME } = require("../consts/user");

/**
 * Т.к мы не можем сравнивать объекты воспользуемся
 * хаком приводя объекты к строкам и сравнивая
 *
 * Данный хак работает только для сравнения пустых объектов
 * так как порядок ключей не может гарантироваться
 */

const hasErrors = errors => JSON.stringify(errors) !== JSON.stringify({});

const isValidUser = user => {
  /**
   * Создаем константную ссылку на неконстантный объект
   * в памяти
   */

  const errors = {};

  if (!user) {
    errors.user = "Пользователь не передан";
  } else if (typeof user !== "object") {
    errors.user = "Некорректный тип данных";
  }

  if (!user[USER_AGE]) {
    errors[USER_AGE] = "Возраст не заполнен";
  } else if (typeof user[USER_AGE] !== "number") {
    errors[USER_AGE] = "Неверный формат возраста";
  }

  if (!user[USER_NAME]) {
    errors[USER_NAME] = "Имя не заполнено";
  } else if (typeof user[USER_NAME] !== "string") {
    errors[USER_NAME] = "Неверный формат";
  }

  if (hasErrors(errors)) {
    return errors;
  }

  return true;
};

module.exports = isValidUser;
