import { Route, Routes } from "react-router-dom";
import Rickandmorty from "../../Pages/Rickandmorty/Rickandmorty";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Page404 from "../../Pages/Page404/Page404";
import RaM from "../../Pages/RaM/RaM";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
			<Route path="/" element={<App/>}/>
                <Route path="home" element={<Home />}/>
                <Route index element={<Home />}/>
                <Route path="rickandmorty" element={<Rickandmorty/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<Page404 />} />
                <Route path="ram" element={<RaM/>}/>
                </Routes>
        </div>
    );
}

export default Routing;
