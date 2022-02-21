import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Info.module.css";
import styled from "styled-components";

const Button = styled.button`
    cursor:${ (prop) => (prop.dis ? "not-allowed" : "pointer")}
`;

export default function Register(){
    const {isAuth2, setFinalAuth, newUser, handleChange, handleSubmit} = React.useContext(AuthContext);
    const [disabled, setDisabled] = React.useState(true);
    const navigate = useNavigate();

    console.log("upadte", newUser.attend)
    if(newUser.uname && newUser.pass && disabled){
        setDisabled(false);
    }

    const nextPage = () => {
        handleSubmit();
        setFinalAuth(true);
        navigate("/dashboard");
    }
    return isAuth2 ? (
        <div className={styles.cont}>
            <div className={styles.box}>
                <input type="text" placeholder="Create UserName" name="uname" value={newUser.uname} onChange={handleChange} />
            </div>
            <div className={styles.box}>
                <input type="password" placeholder="Create Password" name="pass" value={newUser.pass} onChange={handleChange} />
            </div>
            <Button disabled={disabled} dis={disabled} onClick={nextPage}>Register</Button>
            
        </div>
    ) :
    <Navigate to="info"/>
}