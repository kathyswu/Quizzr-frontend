// React imports
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Sass classes
import {
  home,
  banner,
  gradient_border,
  banner_ul,
  menu,
} from "./Home.module.scss";

// Recoil
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user";

// Models
import UserModel from "../../models/user";

const banner_classes = `${banner} ${gradient_border}`;

function Home(props) {
  const [user, setUser] = useRecoilState(userState);

  //componentWillMount
  useEffect(function () {
    if (localStorage.uid) {
      UserModel.show().then((json) => {
        setUser(json.user);
      });
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <div className={home}>
      <div className={banner_classes}>
        <ul className={banner_ul}>
          <li>
            <input type="checkbox" defaultChecked />
            <div>Q</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <div>U</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <div>I</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <div>Z</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <div>Z</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked />
            <div>R</div>
          </li>
        </ul>
        <div className={menu}>
          {user ? (
            <div>
              <Link to="/browse">
                <h2>play now</h2>
              </Link>
              <h2 onClick={logout}>logout</h2>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <h2>play now</h2>
              </Link>
              <Link to="/register">
                <h2>register</h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
