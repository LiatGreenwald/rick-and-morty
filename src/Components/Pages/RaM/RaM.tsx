import axios from "axios";
import { RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./RaM.css";
import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard";

function RaM(): JSX.Element {

    const [ram,setRam]=useState <RickAndMortyModel[]>([]);
    useEffect(()=>{
    axios.get<RickAndMortyModel[]>("https://rickandmortyapi.com/api/character")
    .then(res=>{setRam(res.data)})
    .catch(err=>{console.log(err);})
    },[])  
    return (
        <div className="RaM">
			 {ram.map(c=><RickAndMortyCard key={'name'+c.id} rickandmorty={c}/>)}
        </div>
    );
}

export default RaM;
