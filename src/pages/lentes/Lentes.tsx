import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Lentes = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Facetas em resina")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container" >
      <h2>Facetas em resina</h2>
      <p>Desperte para um sorriso renovado e natural com as nossas facetas em resina. Na nossa clínica, entendemos a importância de um sorriso confiante e radiante. Com as facetas em resina, podemos ajustar a cor e o formato dos seus dentes, proporcionando um resultado estético e natural. Nossa equipe altamente qualificada utiliza técnicas avançadas para criar facetas personalizadas que se integram perfeitamente ao seu sorriso. Seja para corrigir imperfeições, fechar espaços indesejados ou rejuvenescer o seu sorriso, estamos aqui para ajudar você a alcançar o sorriso dos seus sonhos. Agende uma consulta hoje mesmo e descubra como podemos transformar o seu sorriso de forma segura e eficaz.</p>
    </div>
  )
}

export default Lentes