import { API_URL_AUTH as url } from "../constants";

class Auth {
  /**
   * @description register function
   * @param {*} data
   * @returns json promise
   */
  static register(data) {
    return fetch(url + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  /**
   * @description logs in user and creates a JWT (token)
   * @param {*} data
   * @returns json promise with a token
   */
  static login(data) {
    return fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
}

export default Auth;
