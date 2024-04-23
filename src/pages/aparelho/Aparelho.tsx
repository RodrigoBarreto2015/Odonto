import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Aparelho = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Aparelho ortodôntico")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container" >
      <h2>Aparelho ortodôntico</h2>
      <p>Na nossa clínica, acreditamos que um sorriso bonito e saudável é para todas as idades. Por isso, oferecemos tratamento ortodôntico personalizado para alinhar o seu sorriso. Nossa equipe especializada utiliza técnicas modernas e aparelhos ortodônticos avançados para corrigir problemas de má oclusão, espaçamento e alinhamento dos dentes. Seja você um adolescente em busca de um sorriso perfeito ou um adulto procurando melhorar a estética e função dos seus dentes, estamos aqui para ajudar. Agende uma consulta hoje mesmo e dê o primeiro passo em direção ao sorriso dos seus sonhos, não importa a sua idade.</p>
    </div>
  )
}

export default Aparelho