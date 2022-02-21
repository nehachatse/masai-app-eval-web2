import React from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"

export default function Dashboard(){

    let { finalAuth, newUser } = React.useContext(AuthContext);

    return finalAuth ? (
        <div>
            Welcome {newUser.uname} !!!
        </div>
    ) : 
    <Navigate to="/register" />
}