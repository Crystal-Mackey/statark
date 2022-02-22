import { Link } from "react-router-dom";
import Header from "../components/Header";

const Maps = () => {
    return(
      <div>
        <div>
        <Header/>
        </div>
        <div>
            <ul>
          <li>
            <Link to="/maps/island">Island</Link>
          </li>
          <li>
            <Link to="/maps/center">Center</Link>
          </li>
          <li>
            <Link to="/maps/scorched">Scorched Earth</Link>
          </li>
          <li>
            <Link to="/maps/ragnarok">Ragnarok</Link>
          </li>
          <li>
            <Link to="/maps/aberration">Aberration</Link>
          </li>
          <li>
            <Link to="/maps/extinction">Extinction</Link>
          </li>
          <li>
              <Link to="/maps/valguero">Valguero</Link>
          </li>
          <li>
              <Link to="/maps/genesis">Genesis</Link>
          </li>
          <li>
              <Link to="/maps/crystalisles">Crystal Isles</Link>
          </li>
          <li>
              <Link to="/maps/genesis2">Genesis 2</Link>
          </li>
          <li>
              <Link to="/maps/lostisland">Lost Island</Link>
          </li>
          <li>
              <Link to="/maps/fjordur">Fjordur</Link>
          </li>
        </ul>
        </div>
        </div>
    )
}

export default Maps;