import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./RickAndMortyCard.css";

interface RickAndMortyCardProps{
    rickandmorty:ResultModel;
}
function RickAndMortyCard(props: RickAndMortyCardProps): JSX.Element {
    return (
        <div className="RickAndMortyCard">
            
			<p>{props.rickandmorty.id}</p>
            <p>{props.rickandmorty.name}</p>
            <p>{props.rickandmorty.status}</p>
            <p>{props.rickandmorty.species}</p>
            <img src={props.rickandmorty.image} alt={props.rickandmorty.name}/>{""}
        </div>
    );
}

export default RickAndMortyCard;
