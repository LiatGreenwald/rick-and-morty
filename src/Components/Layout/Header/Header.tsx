import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header" >
			<h1>Rick and Morty </h1>
            <SocialMedia facebook={false} twitter={true} waze={true} linkedin={true} email={true}/>
        </div>
    );
}

export default Header;
