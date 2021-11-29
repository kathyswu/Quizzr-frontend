import { API_URL_USER as url } from "../constants";

class User {
  /** Shows current user
   * @description shows currently logged in user's information
   * @returns json promise with user's information based on current token
   */
  static show() {
    return fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  }

  /** Shows one user by id
   * @description shows specific user's information by id
   * @param {string} id
   * @returns json promise with user's information
   */
  static showOne(id) {
    return fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  }

  /** Deletes a User
   * @description deletes a single user from database
   * @param {string} id
   * @returns json promise
   */
  static delete(id) {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  }

  /** Updates a User
   * @description updates a single user in the database
   * @param {string} id
   * @param {*} data
   * @returns json promise
   */
  static update(id, data) {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  }
}

export default User;
