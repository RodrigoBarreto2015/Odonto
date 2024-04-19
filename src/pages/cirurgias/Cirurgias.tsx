import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Cirurgias = () => {
  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Cirurgia e extração")
  }, [page])
  return (
    <>
      <h2>Cirurgias e extrações</h2>
    </>
  )
}

export default Cirurgias