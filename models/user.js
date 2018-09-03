const isValidUser = require("../utils/isValidUser");
const hashObjectToString = require("../utils/hashObjectToString");
const { USER_ID, USER_NAME, USER_AGE } = require("../consts/user");

class User {
  /**
   * Вместо прототипного программирования
   * используем классовое, так намного легче поддерживать код
   */
  constructor(user) {
    this.setUser(user);
  }

  /**
   * Сеттер
   */
  setUser(user) {
    const errorsOrBool = isValidUser(user);

    if (typeof errorsOrBool === "boolean") {
      /**
       * Fancy
       */
      // this.user = Object.assign({}, user, {
      //   [USER_ID]: hashObjectToString(user);
      // })

      /**
       * Simple
       */
      this[USER_NAME] = user[USER_NAME];
      this[USER_AGE] = user[USER_AGE];
      this[USER_ID] = hashObjectToString(user);
    } else if (typeof errorsOrBool === "object") {
      console.log("User validation errors", errorsOrBool);
      /**
       * Выбрасываем ошибку если есть ошибки
       * валидации
       */
      throw new Error();
    }
  }

  /**
   * Геттер
   */
  getUser() {
    return this.user;
  }

  editUser(data) {
    /**
     * Делаем иммутабельную мутацию объекта
     * при помощи слияния методом assign
     */
    this.setUser(Object.assign({}, this.user, data));
  }
}

/**
 * Также экспортируем его как default модуль
 */

module.exports = User;
