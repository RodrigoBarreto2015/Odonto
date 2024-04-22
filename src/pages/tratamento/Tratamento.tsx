import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Tratamento = () => {
  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Tratamento de canal")
    window.scrollTo(0, 0)
  }, [page])
  return (
    <>
      <h2>Tratamento de canal</h2>
    </>
  )
}

export default Tratamento