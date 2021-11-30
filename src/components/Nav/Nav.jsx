import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

import UserModel from "../../models/user";

import "./Nav.scss";

function Nav(props) {
  const [user, setUser] = useRecoilState(userState);

  useEffect(function() {
    if(localStorage.uid) {
      UserModel.show().then(json => {
        setUser(json.user);
      });
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className="nav">
      <section>
        <Link to="" className="logo"><img src="https://i.imgur.com/spEqEvR.png" /></Link>
      </section>
      {user ? (
        <section>
          <Link to="/">Play</Link>
          <Link to="/">Profile</Link>
          <Link onClick={logout}>Logout</Link>
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
