import "./Footer.css";
import LinkButtonGlobal from "../Button/LinkButton";
import { CiInstagram, CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <footer >
            <div className="contato-section">
                <div>Entre em contato:</div>
                <div>Ligue para: </div>
                <div>(85) 98860-3140 ou (85) 3291-7412</div>
                <div>ou</div>
                <div><LinkButtonGlobal text="Agende sua cosulta" link="https://api.whatsapp.com/send?phone=5585988603140&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%3F" /></div>
            </div>
            <div className="endereco-section">
                <div>Endereço:</div>
                <div>Av. C, 61 - Pref. José Walter, Fortaleza - CE, 60750-020</div>
            </div>
            <div className="redes-sociais-section">
                <div>Siga-nos em:</div>
                <div className="icon">
                    <a href="https://www.instagram.com/s3odonto.odo/"><CiInstagram size="3em"/></a>
                    <a href="https://www.facebook.com/s3odonto/"><CiFacebook size="3em"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer