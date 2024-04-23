import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Clareamento = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Clareamento dentário")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container" >
      <h2>Clareamento dentário</h2>
      <p>Desfrute de um sorriso mais brilhante e confiante com o nosso procedimento de clareamento dentário rápido e eficaz. Na nossa clínica, entendemos o impacto que dentes mais claros podem ter na sua autoestima e aparência. É por isso que oferecemos um tratamento de clareamento dentário simples e rápido, que pode transformar o seu sorriso em poucas sessões ou no conforto da sua casa. Utilizando técnicas seguras e produtos de qualidade, ajudamos você a alcançar um sorriso mais radiante e jovial. Agende uma consulta hoje mesmo e descubra como podemos iluminar o seu sorriso de forma simples e eficiente.</p>
    </div>
  )
}

export default Clareamento