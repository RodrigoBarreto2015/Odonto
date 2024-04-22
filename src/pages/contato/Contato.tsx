import { useContext, useEffect } from "react"
import ContatoForm from "../../components/ContatoForm/ContatoForm"
import { PageContext } from "../../hooks/PageContext"

const Contato = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container">
      <h2 className="text-center">Entre em contato conosco</h2>
      <ContatoForm />
    </div>
  )
}

export default Contato