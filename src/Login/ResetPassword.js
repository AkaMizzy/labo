import React,{useState}from 'react';
import '../assets/css/login.css';
import { MdAttachEmail } from "react-icons/md";
export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handle(e) {
        e.preventDefault()
        if (email.endsWith("@gmail.com") || email.endsWith("@hotmail.com")) {
            setMessage("Envoyé avec succès ...")
            setEmail("")

        } else {
            setMessage("Votre email n'est pas valide ")
        }
    }
    return (
        <body>
            <section >
            <section className="login-section" id="login">
                <div className="voiture-container">
                    <form onSubmit={handle}>
                        <label for="email">Email :</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="input-field"
                            placeholder="Entez votre email ou numéro de téléphone" />
                        <button type="submit" className="search-button">Envoyer</button><br />
                    </form><br />
                    <h3>{message}</h3>
            </div>
            </section>
            </section>




        </body>
    )
}