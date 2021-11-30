import { home, banner, gradient_border, banner_ul, bouncing_words, playnow }  from "./Home.module.scss";

const banner_classes = `${banner} ${gradient_border}`;

const Home = () => {
  return (
    <div className={home}>
        <div className={banner_classes}>
          <div className={bouncing_words}>
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
          </div>
          <ul className={banner_ul}>
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
        <div className={playnow}>
          <h2>
            play now
          </h2>
        </div>
    </div>
  );
}

export default Home;
