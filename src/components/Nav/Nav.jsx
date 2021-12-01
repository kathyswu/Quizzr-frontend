import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

import "./Nav.scss";

function Nav(props) {
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className="nav">
      <section>
        <Link to="/" className="logo"><img src="https://i.imgur.com/spEqEvR.png" /></Link>
      </section>
      {user ? (
        <section>
          <Link to="/browse">Play</Link>
          <Link to={`/user/${user._id}`}>{user.username}</Link>
          <img className="nav_avatar"src={user.avatar} alt={user.username} />
          <Link to="" onClick={logout}>Logout</Link>
        </section>
      ) : (
        <section>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </section>
      )}

    </div>
  );
}

export default Nav;
