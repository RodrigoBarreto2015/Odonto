import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"
import "./Lentes.scss"
import LinkButtonGlobal from "../../components/Button/LinkButton"

const Lentes = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Facetas em resina")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container-lente" >
      <section className="apresentacao">
        <h2>Transforme Seu Sorriso com Lentes de Contato Dental</h2>
        <img src="https://sorrisologia.com.br/documents/37259750/37287069/8976-voce-sabia-que-a-lente-de-contato-dental-slider_medias-1.jpg" className="img-fluid rounded w-4" alt="Responsive image" />
        <p>Bem-vindo à nossa página dedicada às lentes de contato dental, a solução moderna e eficaz para um sorriso deslumbrante! Aqui você encontrará todas as informações que precisa para entender como as lentes de contato podem transformar o seu sorriso e melhorar sua confiança.</p>
      </section>
      <section className="explicacao">
        <h4>O que são Lentes de Contato Dental?</h4>
        <p>As lentes de contato dental são lâminas ultrafinas feitas de porcelana ou materiais compostos, projetadas para cobrir a parte frontal dos dentes. Elas são personalizadas para se ajustarem perfeitamente aos seus dentes naturais, proporcionando uma aparência natural e harmoniosa.</p>
      </section>
      <section className="beneficios">
        <h4>Benefícios das Lentes de Contato Dental</h4>
        <img src="https://www.clinicaodontoup.com.br/images/servicos/lente-de-contato-dental-01.webp" className="img-fluid rounded" alt="Responsive image" />
        <ul>
          <li><span><b>Sorriso Perfeito</b><br />Corrige imperfeições como manchas, irregularidades, dentes desalinhados ou pequenos espaços entre os dentes.</span></li>
          <li><span><b>Durabilidade</b><br />As lentes de contato dental são resistentes e duráveis, proporcionando um sorriso bonito por muitos anos.</span></li>
          <li><span><b>Aparência Natural</b><br />Feitas sob medida para se misturarem perfeitamente com seus dentes naturais, as lentes de contato dental proporcionam um sorriso natural e atraente.</span></li>
          <li><span><b>Conforto</b><br />São finas e leves, oferecendo conforto ao falar, comer e sorrir.</span></li>
          <li><span><b>Melhora a Confiança</b><br />Um sorriso bonito pode aumentar sua autoconfiança e melhorar sua interação social e profissional.</span></li>
        </ul>
      </section>
      <section className="funcionamento">
        <h4>Como Funciona o Procedimento</h4>
        <img src="https://www.clinicaodontoup.com.br/images/servicos/lente-de-contato-dental-02.webp" className="img-fluid rounded" alt="Responsive image" />
        <ul>
          <li><span><b>Consulta Inicial</b> <br />Agende uma consulta com um dentista especializado em estética dental para avaliar a viabilidade das lentes de contato dental para o seu caso.</span></li>
          <li><span><b>Preparação</b> <br />Seu dentista irá preparar os dentes removendo uma fina camada de esmalte para garantir um encaixe perfeito das lentes.</span></li>
          <li><span><b>Moldagem</b> <br />Será feita uma moldagem precisa dos seus dentes para criar as lentes de contato sob medida.</span></li>
          <li><span><b>Instalação</b> <br />Após a fabricação das lentes, elas serão cuidadosamente coladas sobre os seus dentes naturais usando cimento adesivo especial.</span></li>
          <li><span><b>Ajustes Finais</b> <br />Se necessário, seu dentista fará ajustes finos para garantir que suas novas lentes de contato dental ofereçam o melhor resultado estético e funcional.</span></li>
        </ul>
      </section>
      <section className="escolha">
        <h4>Por que Escolher Nossa Clínica</h4>
        <ul className="list-group">
          <li className="list-group-item"><b>Profissionais Especializados</b><br /> <span style={{ paddingLeft: "20px", display: "block" }}>Nossa equipe de dentistas altamente qualificados e experientes garantirá um tratamento personalizado e de alta qualidade.</span></li>
          <li className="list-group-item"><b>Tecnologia Avançada</b><br /> <span style={{ paddingLeft: "20px", display: "block" }}>Utilizamos tecnologia de ponta e materiais de qualidade para oferecer os melhores resultados aos nossos pacientes.</span></li>
          <li className="list-group-item"><b>Atendimento Personalizado</b><br /> <span style={{ paddingLeft: "20px", display: "block" }}>Nosso compromisso é oferecer um atendimento gentil, compassivo e personalizado para garantir o seu conforto e satisfação.</span></li>
        </ul>
      </section>
      <section className="agende">
        <div className="jumbotron">
          <h4 className="display-5">Agende Sua Consulta Hoje Mesmo!</h4>
          <p className="lead">Não espere mais para ter o sorriso dos seus sonhos! Agende uma consulta conosco e descubra como as lentes de contato dental podem transformar sua aparência e sua vida.</p>
          <hr className="my-4" />
          <p>Entre em contato agora mesmo e dê o primeiro passo em direção a um sorriso radiante!</p>
          <p className="lead">
            <LinkButtonGlobal text="Agende agora" link="https://api.whatsapp.com/send?phone=5585988603140&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+referente+a%3A+Facetas em resina%3F" />
          </p>
        </div>
      </section>
    </div>
  )
}

export default Lentes