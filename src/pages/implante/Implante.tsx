import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Implante = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Implante dentário")
  }, [page])

  return (
    <>
      <h2>Implante dentário</h2>
    </>
  )
}

export default Implante