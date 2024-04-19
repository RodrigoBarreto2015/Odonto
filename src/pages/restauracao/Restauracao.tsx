import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Restauracao = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Restauração")
  }, [page])

  return (
    <>
      <h2>Restauração dental</h2>
    </>
  )
}

export default Restauracao