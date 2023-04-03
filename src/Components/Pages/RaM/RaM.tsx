import axios from "axios";
import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./RaM.css";
import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard";

function RaM(): JSX.Element {

    const [ram,setRam]=useState <ResultModel[]>([]);
    useEffect(()=>{
    axios.get<RickAndMortyModel>("https://rickandmortyapi.com/api/character")
    .then(res=>{setRam(res.data.results)})
    .catch(err=>{console.log(err);})
    },[])  
    return (
        <div className="RaM">
            <div className="cards-display">
			 {ram.map(c=><RickAndMortyCard key={'name'+c.id} rickandmorty={c}/>)}
        </div>
        </div>
    );
}

export default RaM;
