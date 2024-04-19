import { useContext, useEffect } from "react"
import { PageContext } from "../App"

const Tratamento = () => {
  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Tratamento de canal")
  }, [page])
  return (
    <>
      <h2>Tratamento de canal</h2>
    </>
  )
}

export default Tratamento