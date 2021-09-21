import React, { useState, useEffect } from "react";
import { setAuthToken } from "../utils/token";
// import api from "../settings/api";
import api from "../settings/api";
import "./Login.css";
import "../App.css";
import Popup from "../components/Popup";
const Login = () => {

    const [name,setName] = useState("");
    const [areWrongCredentials, setAreWrongCredentials] = useState(false);
    const [password,setPassword] = useState("");

    const [buttonPopup, setButtonPopup] = useState(false);
    const [timedPopup, setTimedPopup] = useState(false); // eslint-disable-line

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const crendetials = { username: name, password };

        const response = api.post('authenticate', crendetials);
        response
            .then(res => {
                setAuthToken("Bearer ".concat(res.data.token));
                window.location.reload();
            })
            .catch(() => {
                setName("");
                setPassword("");
                setAreWrongCredentials(true);
            });
    };

    return (
        <div className="container">
            <div className="login">
                    <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            {/* <h1 style={{backgroundColor:"lightgrey",borderRadius:"3px",textAlign:"center"}}>Log In</h1> */}
                            <img src="/images/ofb.png" alt="" />
                        </div>
                        <input 
                        type="name"
                        required
                        placeholder="Логин" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                        type="password"
                        required 
                        placeholder="Пароль"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    {areWrongCredentials &&
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <h3>Вход</h3>
                      <p>Неверно указано имя пользователя или пароль</p>
                    </Popup> 
                    // <button onClick={() => setButtonPopup(true)}>Open Popup</button>
                    // <p style={{ color: "red" }}>Details don't match. Invalid Login or Password!</p>
                    }
                        <button type="submit" className="submit_btn" onClick={() => setButtonPopup(true)}>
                            Войти
                        </button>
                    </form>
            </div>
    </div>     
    );
};

export default Login;