import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav(props) {
  return (
    <div className="nav">
      <section>
        <Link to="" className="logo"><img src="https://i.imgur.com/spEqEvR.png" /></Link>
      </section>
      <section>
        <Link to="">Login</Link>
        <Link to="">Register</Link>
      </section>
    </div>
  );
}

export default Nav;
