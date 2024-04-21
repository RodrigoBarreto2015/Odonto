import "./Footer.css";
import LinkButtonGlobal from "../Button/LinkButton";
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer >
            <div className="contato-section">
                <div>Entre em contato:</div>
                <div>Ligue para: (85) 99999-9999</div>
                <div>ou</div>
                <div><LinkButtonGlobal text="Agende sua cosulta" link="https://api.whatsapp.com/send?phone=5585987550023&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%3F" /></div>
            </div>
            <div className="endereco-section">
                <div>Endereço:</div>
                <div>Av. C, 61 - Pref. José Walter, Fortaleza - CE, 60750-020</div>
            </div>
            <div className="redes-sociais-section">
                <div>Siga-nos em:</div>
                <div className="icon"><CiInstagram size="3em"/><span>Instagram</span></div>
                <div className="icon"><CiFacebook size="3em"/><span>Facebook</span></div>
                <div className="icon"><CiLinkedin size="3em"/><span>LinkedIn</span></div>
            </div>
        </footer>
    )
}

export default Footer