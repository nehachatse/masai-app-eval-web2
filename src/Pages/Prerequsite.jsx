import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Prereq.module.css";

const Button = styled.button`
    cursor:${ (prop) => (prop.dis ? "not-allowed" : "pointer")}
`;

export default function Prerequsite(){
    const {setIsAuth1, newUser, handleChange} = React.useContext(AuthContext);
    const [disabled, setDisabled] = React.useState(true);
    const navigate = useNavigate();

    console.log("upadte", newUser.attend)
    if(newUser.attend && newUser.laptop && disabled){
        setDisabled(false);
    }

    const nextPage = () => {
        setIsAuth1(true);
        navigate("/info");
    }
    return (
        <div className={styles.cont}>
            <div className={styles.box}>
                <input type="checkbox" name="attend" value={newUser.attend} onChange={handleChange} />
                <label for="attend">Can you attend 90% of the classes?</label>
            </div>
            <div className={styles.box}>
                <input type="checkbox" name="laptop" value={newUser.laptop} onChange={handleChange} />
                <label for="laptop">Do you have a laptop?</label>
            </div>
            <Button disabled={disabled} dis={disabled} onClick={nextPage}>Continue</Button>
        </div>
    )
}