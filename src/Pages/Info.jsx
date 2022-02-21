import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "./Info.module.css";
import styled from "styled-components";

const Button = styled.button`
    cursor:${ (prop) => (prop.dis ? "not-allowed" : "pointer")}
`;

export default function Info(){
    const {isAuth1, setIsAuth2, newUser, handleChange} = React.useContext(AuthContext);
    const [disabled1, setDisabled1] = React.useState(true);
    const navigate = useNavigate();

    console.log("upadte", newUser.quali, disabled1)
    if(newUser.quali && newUser.year && newUser.dob  && newUser.gender&& newUser.state && disabled1){
        setDisabled1(false);
    }

    const nextPage = () => {
        setIsAuth2(true);
        navigate("/register");
    }

    return isAuth1 ? (
        <div className={styles.cont}>
            <form>
                <div className={styles.box}>
                    <label for="quali">Highest Qualification</label>
                    <input type="text" name="quali" placeholder="Enter your highest qualification" value={newUser.quali} onChange={handleChange}/>
                </div>
                <div className={styles.box}>
                    <label for="year">Passing year </label>
                    <input type="number" name="year" placeholder="Enter your passing year" value={newUser.year} onChange={handleChange}/>
                </div>
                <div className={styles.box}>
                    <label for="dob"> Date of Birth </label>
                    <input type="number" name="dob" placeholder="Enter your date of birth" value={newUser.dob} onChange={handleChange}/>
                </div >
                <div className={styles.box}>
                    <label for="gender"> Gender </label>
                    <select name="gender" value={newUser.value} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                </div>
                <div className={styles.box}>
                    <label for="state"> Date of Birth </label>
                    <input type="text" name="state" placeholder="Enter State" value={newUser.state} onChange={handleChange}/>
                </div>
                <Button disabled={disabled1} dis={disabled1} onClick={nextPage}>Register</Button>
            </form>
        </div>

    ) :
    <Navigate to="/signup"/>
}