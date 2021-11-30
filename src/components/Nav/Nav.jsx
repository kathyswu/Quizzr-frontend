import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav(props) {
  return (
    <div className="nav">
      <section>
        <Link to="" className="logo"><img src="https://i.imgur.com/spEqEvR.png" /></Link>
      </section>
      <section>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </section>
    </div>
  );
}

export default Nav;
