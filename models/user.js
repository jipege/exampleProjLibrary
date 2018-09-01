const isValidUser = require("../utils/isValidUser");

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
      this.user = user;
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
