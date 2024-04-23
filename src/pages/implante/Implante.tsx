import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Implante = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Implante dentário")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container" >
      <h2>Implante dentário</h2>
      <p>Recupere o sorriso dos seus sonhos com os nossos serviços de implantes dentários. Na nossa clínica, entendemos o impacto que a falta de dentes pode ter na sua autoconfiança e qualidade de vida. É por isso que oferecemos soluções personalizadas de implantes dentários para restaurar a estética e função do seu sorriso. Com uma equipe experiente e tecnologia de ponta, estamos comprometidos em oferecer resultados duradouros e naturais. Seja para substituir um único dente ou restaurar toda a arcada, estamos aqui para ajudar você a recuperar a sua melhor versão. Agende uma consulta hoje mesmo e dê o primeiro passo em direção ao sorriso que você sempre desejou.</p>
    </div>
  )
}

export default Implante