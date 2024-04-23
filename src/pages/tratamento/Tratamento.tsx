import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Tratamento = () => {
  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Tratamento de canal")
    window.scrollTo(0, 0)
  }, [page])
  return (
    <div className="container" >
      <h2>Tratamento de canal</h2>
      <p>Nossos especialistas altamente qualificados utilizam equipamentos de última geração para garantir um tratamento eficiente e confortável. Com nossa abordagem moderna, muitos casos podem ser concluídos em apenas uma sessão, proporcionando conveniência e resultados rápidos para nossos pacientes. Conte conosco para um tratamento de canal seguro, eficaz e sem complicações. Agende sua consulta hoje mesmo e restaure o conforto e a saúde do seu sorriso.</p>
    </div>
  )
}

export default Tratamento