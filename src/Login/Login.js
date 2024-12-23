import React, { useState } from 'react';
import '../assets/css/login.css'

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "1234") {
            setMessage("Connexion réussie");
            navigate("/dashboard");
        } else {
            setMessage("Email ou mot de passe incorrect");
        }
        setEmail("");
        setPassword("");
    }
    return (
        <body>
            <section >
                <section className="login-section" id="login">
                    <div className="voiture-container">
                        <h2 className="title">Se connecter</h2>
                        <form onSubmit={handleLogin}>
                            <MdAttachEmail /> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field"
                                placeholder="Entez votre email ou numéro de téléphone" /><br/>

                            <RiLockPasswordFill /> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" placeholder="Entez votre Mot de passe" />

                            <div className="remember-me-container">
                                <label for="remember-me">Se souvenir de moi:</label>
                                <input type="checkbox" id="remember-me" />
                            </div>
                            <button type="submit" className="search-button">Se connecter</button><br />

                            <h3>{message}</h3>


                        </form><br />
                        <p style={{ marginLeft: "400px" }}><Link to="/ResetPassword" style={{ color: "#28b2cd" }}>Forgot paasword</Link></p>
                    </div>

                </section>
            </section>

        </body>
    )
}