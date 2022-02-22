import { Link } from "react-router-dom";

const FjordurRoutes = () => {
    return(
        <ul>
        <li>
        <Link to="/maps/fjordur/andrewsarchus">Andrewsarchus</Link>
        </li>
        <li>
            <Link to="/maps/fjordur/carcharondontosaurus">Carcharondontosaurus</Link>
        </li>
        <li>
            <Link to="/maps/fjordur/desmodus">Desmodus</Link>
        </li>
        <li>
            <Link to="/maps/fjordur/fenrir">Fenrir</Link>
        </li>
        <li>
            <Link to="/maps/fjordur/fjordhawk">Fjordhawk</Link>
        </li>
        </ul>
    )
}

export default FjordurRoutes;