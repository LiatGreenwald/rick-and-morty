// import axios from "axios";
// import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
// import "./RaM.css";
// import { useEffect, useState } from "react";
// import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard";

// function RaM(): JSX.Element {

//     const [ram,setRam]=useState <ResultModel[]>([]);
//     useEffect(()=>{
//     axios.get<RickAndMortyModel>("https://rickandmortyapi.com/api/character")
//     .then(res=>{setRam(res.data.results)})
//     .catch(err=>{console.log(err);})
//     },[])  
//     return (
//         <div className="RaM">
//             <div className="cards-display">
// 			 {ram.map(c=><RickAndMortyCard key={'name'+c.id} rickandmorty={c}/>)}
//         </div>
//         </div>
//     );
// }

// export default RaM;

import axios from "axios";
import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./RaM.css";
import { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard";

function RaM(): JSX.Element {

    const [ram,setRam]=useState <ResultModel[]>([]);
    const [status, setStatus] = useState<string>("");
    const [species, setSpecies] = useState<string>("");

    useEffect(()=>{
        let url = "https://rickandmortyapi.com/api/character";
        if (status) {
            url += `?status=${status}`;
        }
        if (species) {
            url += `&species=${species}`;
        }
        axios.get<RickAndMortyModel>(url)
            .then(res=>{setRam(res.data.results)})
            .catch(err=>{console.log(err);})
    },[status, species]);

    return (
        <div className="RaM">
            <div className="filters">
                <label htmlFor="status">Filter by Status:</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label htmlFor="species">Filter by Species:</label>
                <select id="species" value={species} onChange={(e) => setSpecies(e.target.value)}>
                    <option value="">All</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                    <option value="robot">Robot</option>
                    <option value="cronenberg">Cronenberg</option>
                    <option value="mythological">Mythological Creature</option>
                    <option value="animal">Animal</option>
                    <option value="unknown">Unknown</option>
                    <option value="disease">Disease</option>
                </select>
            </div>
            <div className="cards-display">
			    {ram.map(c=><RickAndMortyCard key={'name'+c.id} rickandmorty={c}/>)}
            </div>
        </div>
    );
}

export default RaM;

