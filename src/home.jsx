import { Link } from 'react-router-dom';
import omni from "./4WD Omni-directional.webp";
import leaser from "./Leaser protection.webp";
import plant from "./PlantWatering.webp";
import bascular from "./bascular.jpg";
import "./home.css";
import Product from "./product.jsx";
import simple from "./simple Obstacle avoiding.webp";

function Home() {
  return (
    <div className="home">
      {/* <img className="home__image" src={amazonImage} alt="Amazon" /> */}
      <div className="work">
        <Link to="/projectSuggestion">
          <button className="projecthelp">Project Suggestion</button>
        </Link>
        <Link to="/componentSuggestion">
          <button className="projecthelp">Component Suggestion</button>
        </Link>
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="4WD Omni-directional Mecanum Wheels Robotic Car Kit with Raspberry Pi Pico"
          image={omni}
        />
        <Product
          id="2"
          title="Laser protection security system with Arduino"
          image={leaser}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Automatic Bridge Control System (Bascular Bridge)"
          image={bascular}
        />
        <Product
          id="4"
          title="A plant watering system with the Nodemcu ESP8266 board and the new Blynk update"
          image={plant}
        />
        <Product
          id="5"
          title="A simple Obstacle avoiding robot without a servo motor"
          image={simple}
        />
      </div>
    </div>
  );
}

export default Home;
