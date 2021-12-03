import { API_URL_QUIZ as url } from "../constants";

class QuizModel {
  /** All quizzes
   * @description fetches all the quizzes in the db
   * @returns json promise
   */
  static all() {
    return fetch(url).then((response) => response.json());
  }

  /** Find users quizzes
   * @description fetches only the quizzes made by the user in the db
   * @returns json promise
   */
  static userQuizzes(id) {
    return fetch(`${url}/userQuizzes?id=${id}`).then((response) =>
      response.json()
    );
  }

  /** Create a new quiz
   * @description sends a post request creating a new quiz
   * @param {*} data
   * @returns json promise
   */
  static create(data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  /** Delete a quiz
   * @description sends a delete request to delete a single quiz
   * @param {string} id
   * @returns
   */
  static delete(id) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then((response) =>
      response.json()
    );
  }

  /** Update a quiz
   * @description sends a put request to update a single quiz
   * @param {string} id
   * @param {*} data
   * @returns
   */
  static update(id, data) {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}

export default QuizModel;
