import LinkButtonGlobal from "../Button/LinkButton";
import "./ServicoCards.css";

const ServicoCards = () => {
    return (
        <div className="container py-2">
            <h2 className="text-center">Consultas e tratamentos</h2>

            <div className="row rows-cols-1 rows-cols-md-3 g-4 py-5 ">

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-yDcN2HHz7ocAfdjJSkvc9---imagem.webp?alt=media&token=ca258af7-ad60-4b43-9b06-b1c63649e136" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Implante Dentário</h5>
                            <p className="card-text">Somos especializados em serviços de implante dentário. O implante dentário é uma técnica avançada para substituir dentes perdidos ou danificados, restaurando a funcionalidade e a estética do sorriso.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/implante"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-Pmbt2GzMwom6zYy3j4z8C---imagem.webp?alt=media&token=1034f1a6-b304-4162-8d9e-ed9414ecb132" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aparelho Ortodôntico</h5>
                            <p className="card-text">Somos uma clínica odontológica especializada em serviços de ortodontia, incluindo o tratamento com aparelho ortodôntico. O aparelho ortodôntico é uma técnica para corrigir problemas de alinhamento dos dentes e da mordida, proporcionando um sorriso mais bonito e saudável</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/aparelho"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-dVysbyVuMKKARrT3NAZrA---imagem.webp?alt=media&token=8d1295fb-64a1-4d2b-94ab-a43de06bd024" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Clareamento Dentário</h5>
                            <p className="card-text">Uma clinica odontológica especializada em serviços de estética dental, incluindo o tratamento de clareamento dentário. O clareamento dentário é uma técnica para remover manchas e descolorações dos dentes, deixando-os mais brancos e brilhantes.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/clareamento"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-u02xqmZkt9O8vx4Y0vDG----imagem.webp?alt=media&token=2040fa5b-5c5f-44ce-8bee-a7f9dc807799" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Prótese Dentária</h5>
                            <p className="card-text">A prótese dentária é um tratamento que visa a substituição de dentes perdidos ou danificados por meio de próteses dentárias fixas ou removíveis. Aqui, a prótese dentária é realizada por uma equipe de profissionais altamente capacitados e com ampla experiência na área, garantindo um tratamento seguro e eficiente.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/protese"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-erwNxA0pwLDU6Gmy1ld1_---imagem.webp?alt=media&token=34e02fe8-e8fe-46c0-bedf-f89059847225" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cirurgias e Extrações</h5>
                            <p className="card-text">As cirurgias e extrações são procedimentos importantes, que podem ser necessários para corrigir problemas como dentes do siso impactados, cistos dentais, traumas dentários, entre outros.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/cirurgias"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-4JM9fSGaK_LAdeAoG8pM0---imagem.webp?alt=media&token=35527f4a-a76e-40b2-a9ea-3b9149035a91" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Profilaxia (Limpeza)</h5>
                            <p className="card-text">A profilaxia dentária é um procedimento de limpeza profunda dos dentes, realizado por um dentista ou higienista dental, que tem como objetivo remover placa bacteriana, tártaro e manchas superficiais, prevenindo o surgimento de doenças periodontais e cáries.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/profilaxia"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-23V_jwsd35J0lifrYKwVN---imagem.webp?alt=media&token=d83acdc1-bfb5-4c6c-85dd-1447f6ba1ca7" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Restauração Dental</h5>
                            <p className="card-text">A restauração dental é um procedimento que visa restaurar a estrutura dos dentes danificados por cáries ou outros problemas bucais, por meio da aplicação de materiais restauradores como resina ou amálgama.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/restauracao"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-dbIbj4N1gHcz0OajDVJtw---imagem.webp?alt=media&token=6fb83da1-ff9e-4d20-907d-977ff66b82f8" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tratamento de Canal</h5>
                            <p className="card-text">O tratamento de canal é um procedimento odontológico que visa tratar lesões na polpa dentária, que pode ser causada por cáries profundas, fraturas ou traumas dentais.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/tratamento"/>
                        </div>
                    </div>
                </div>

                <div className="col col-auto m-auto mb-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/site-sorrifacil.appspot.com/o/tratamentos-EX_N5DNPGn4DXnBf2wL3Y---imagem.webp?alt=media&token=d8728004-993c-42ab-924d-0f5364052b94" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lentes de Contato Dental</h5>
                            <p className="card-text">As lentes de contato dental são uma técnica estética que consiste na aplicação de finas lâminas de porcelana nos dentes, corrigindo imperfeições e melhorando a aparência do sorriso.</p>
                        </div>
                        <div className="d-flex just-content-center p-3">
                            <LinkButtonGlobal text="Saiba mais" link="/servicos/lentes"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicoCards