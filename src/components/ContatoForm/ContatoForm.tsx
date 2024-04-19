import ButtonGlobal from "../Button/Button"
import "./ContatoForm.css";
import MaskedInput from 'react-text-mask';

const ContatoForm = () => {
    return (
        <form >
            <div className="form-outline mb-4">
            <label htmlFor="exampleInputNome1">Nome</label>
                <input type="text" className="form-control" id="exampleInputNome1" placeholder="Nome" />
            </div>

            <div className="form-outline mb-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
            <label htmlFor="exampleInputPhone1">Telefone</label>
                <MaskedInput
                    className="form-control"
                    id="exampleInputPhone1"
                    mask={["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                    placeholder="(xx) 9xxxx-xxxx"
                    required
                />
            </div>

            <ButtonGlobal text="Entrar em contato" />
        </form>

    )
}

export default ContatoForm