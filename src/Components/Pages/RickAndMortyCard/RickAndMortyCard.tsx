import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./RickAndMortyCard.css";

interface RickAndMortyCardProps{
    rickandmorty:ResultModel;
}
function RickAndMortyCard(props: RickAndMortyCardProps): JSX.Element {
    return (
        <div className="RickAndMortyCard">
            
			<p>ID: {props.rickandmorty.id}</p>
            <p>Name: {props.rickandmorty.name}</p>
            <p>Status: {props.rickandmorty.status}</p>
            <p>Species: {props.rickandmorty.species}</p>
            <img src={props.rickandmorty.image} alt={props.rickandmorty.name}/>{""}
        </div>
    );
}

export default RickAndMortyCard;
