// SCSS classes
import {
  profile,
  info_gradient_border,
  quiz_gradient_border,
  quiz_inner_container,
  edit_button,
  edit_avatar,
} from "./Profile.module.scss";

// React modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hooks
import useQuizzes from "../../hooks/useQuizzes";
import useUsers from "../../hooks/useUsers";

// Models
import UserModel from "../../models/user";

// Components
import Gallery from "../../components/Gallery/Gallery";
import QuizModel from "../../models/quiz";

function Profile({ match: { params }, history }) {
  const [user, setUser] = useUsers();
  const [quizzes, setQuizzes] = useQuizzes(params.id);
  const [avatar, setAvatar] = useState("");

  const userSince = new Date(user.createdAt);

  const handleDelete = (quizId, index) => {
    QuizModel.delete(quizId).then((json) => {
      let tempQuizzes = [...quizzes];
      tempQuizzes.splice(index, 1);
      setQuizzes(tempQuizzes);
    });
  };

  useEffect(
    function () {
      UserModel.showOne(params.id).then((json) => {
        setUser(json.user);
      });
    },
    [params.id]
  );

  useEffect(function () {
    QuizModel.userQuizzes(params.id).then((json) => {
      setQuizzes(json.quizzes);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const testPic = new Image();

    testPic.onload = () => {
      UserModel.update(params.id, {
        avatar,
      }).then((json) => {
        setUser(json.user);
        history.push(`/user/${params.id}`);
      });
    };

    testPic.onerror = (e) => {
      UserModel.update(params.id, {
        avatar: "https://i.imgur.com/B84tGhT.jpg",
      }).then((json) => {
        setUser(json.user);
        history.push(`/user/${params.id}`);
      });
    };

    testPic.src = avatar;
  };

  const showForm = (event) => {
    document.getElementById("edit_form").style.display = "grid";
  };

  return (
    <div className={profile}>
      <div className={info_gradient_border}>
        <img src={user.avatar} alt={user.username} />
        <span>{user.username}</span>
        <p>
          Quizzr Since{" "}
          {userSince.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        {user._id === params.id ? (
          <div>
            <a className={edit_button} onClick={showForm}>
              <i className="fas fa-edit"></i>
            </a>
            <form
              className={edit_avatar}
              id="edit_form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="avatar"
                placeholder={user.avatar}
                onChange={(event) => setAvatar(event.target.value)}
                required
              />
              <input type="submit" value="Change Picture" />
            </form>
          </div>
        ) : null}
      </div>
      <div className={quiz_gradient_border}>
        <div className={quiz_inner_container}>
          <Gallery
            title={`Quizzes by ${user.username}`}
            data={quizzes}
            handleDelete={handleDelete}
            hasDelete
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
