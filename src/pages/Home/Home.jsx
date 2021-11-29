import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <br />
          <span>T</span>
          <span>O</span>
        </h1>
        <ul>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>Q</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>U</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>I</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>Z</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>Z</div>
          </li>
          <li>
            <input type="checkbox" defaultChecked/>
            <div>R</div>
          </li>
        </ul>
      </div>
        <h2>
          play now
        </h2>
        
    </div>
  );
}

export default Home;
