import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Restauracao = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Restauração")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <h2>Restauração dental</h2>
    </>
  )
}

export default Restauracao