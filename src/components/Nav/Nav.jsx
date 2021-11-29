import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav(props) {
  return (
    <div className="nav">
      <section>
        <img src="" />
        <Link to="">Quizzr</Link>
      </section>
      <section>
        <Link to="">Login</Link>
        <Link to="">Register</Link>
      </section>
    </div>
  );
}

export default Nav;
