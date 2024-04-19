import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Clareamento = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Clareamento dentário")
  }, [page])

  return (
    < >
      <h2>Clareamento dentário</h2>
    </>
  )
}

export default Clareamento