import { useContext, useEffect } from "react"
import { PageContext } from "../App"

const Aparelho = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Aparelho ortodôntico")
  }, [page])

  return (
    < >
      <h2>Aparelho ortodôntico</h2>
    </>
  )
}

export default Aparelho