// SCSS classes
import { profile, info_gradient_border, quiz_gradient_border, menu, edit_button, edit_avatar }  from "./Profile.module.scss";

// React modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hooks
import useQuizzes from "../../hooks/useQuizzes";
import useUsers from "../../hooks/useUsers";
import useModal from "../../hooks/useModal";

// Models
import UserModel from "../../models/user";

// Components
import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";

function Profile({match: { params }, history}) {
  const [user, setUser] = useUsers();
  const [quizzes, fetchQuizzes] = useQuizzes();
  const [avatar, setAvatar] = useState("");

  const userSince = new Date(user.createdAt);
  
  useEffect(function() {
    UserModel.showOne(params.id).then(json => {
      setUser(json.user);
    });
  
  }, [params.id]);

  const handleSubmit = event => {
    event.preventDefault();
    UserModel.update(params.id, {
      avatar
    }).then(json => {
      history.push(`/user/${params.id}`);
    });
  };

  const showForm = event => {
      document.getElementById("edit_form").style.display = "grid";
  }

  return (
    <div className={profile}>
        <div className={info_gradient_border}>
          <img src={user.avatar} alt={user.username} />
          <span>{user.username}</span>
          <p>Quizzr Since {userSince.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
          { user._id === params.id ? (
            <div>
              <a className={edit_button} onClick={showForm}><i className="fas fa-edit"></i></a>
              <form className={edit_avatar} id="edit_form" onSubmit={handleSubmit}>
                <input type="text" name="avatar" defaultValue={user.avatar} onChange={event => setAvatar(event.target.value)} required/>
                <input type="submit" value="Change Picture"/>
              </form>
            </div>
          ) : (
            null
          )
          }

        </div>
        <div className={quiz_gradient_border}>
          <Gallery title={`Quizzes by ${user.username}`} data={quizzes.filter(quiz => quiz.user === params.id)} />
        </div>
        <div className={menu}>
        </div>
    </div>
  );
}

export default Profile;
