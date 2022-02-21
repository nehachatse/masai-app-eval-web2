import {Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Info from "../Pages/Info";
import Prerequsite from "../Pages/Prerequsite";
import Register from "../Pages/Register";

export default function Routers(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Prerequsite/>}/>
            <Route path="/info" element={<Info/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="*" element="Page not found 404" />
        </Routes>
    )
}