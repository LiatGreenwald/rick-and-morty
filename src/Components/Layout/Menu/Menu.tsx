import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to="home">Home</Link>
             <Link to="about">About</Link>
            <Link to="rickandmorty">Rick And Morty</Link>
            <Link to="ram">Rick And Morty 2</Link>
        </div>
    );
}

export default Menu;
