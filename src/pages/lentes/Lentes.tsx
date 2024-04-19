import { useContext, useEffect } from "react"
import { PageContext } from "../App"

const Lentes = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Lentes de contato")
  }, [page])

  return (
    <>
      <h2>Lentes de contato dental</h2>
    </>
  )
}

export default Lentes