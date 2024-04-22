import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Lentes = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Lentes de contato")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <h2>Lentes de contato dental</h2>
    </>
  )
}

export default Lentes