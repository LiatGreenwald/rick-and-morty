import { ChangeEvent, useEffect, useState } from "react";
import { ResultModel, RickAndMortyModel } from "../../../Models/Rickandmortymodel";
import "./Rickandmorty.css";
import axios from "axios";
import RickAndMortyCard from "../RickAndMortyCard/RickAndMortyCard";

function Rickandmorty(): JSX.Element {

    const tableHeaders = ["Id", "Name", "Status", "Species", "Img"];
  const [char, setChar] = useState<ResultModel[]>([]);
 const [filtertext, setFiltertext] = useState<string>("");

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setFiltertext(e.target.value);
       };

       const filterChar = char.filter((el) => {
            return (
                el.name.toLowerCase().includes(filtertext.toLowerCase()) ||
                  el.species.toLowerCase().includes(filtertext.toLowerCase())
                     );
                   });

           useEffect(() => {
                 axios.get<RickAndMortyModel>("https://rickandmortyapi.com/api/character")
                   .then((res) => {
                     setChar(res.data.results)
                   })
                   .catch((err) => {
                     console.log(err);
                   });
               }, []);
            
    return (
        <div className="Rickandmorty">
            <span>Filter by name: </span>
       <input type="text" onChange={handleChange} />
			<div className="cards-display">
                 {filterChar.map(c => <RickAndMortyCard key={'name' + c.id} rickandmorty={c} />)}
                 </div>

        </div>
    );
}

export default Rickandmorty;
