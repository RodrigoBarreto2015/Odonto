import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Aparelho = () => {

  const {page, setPage} = useContext(PageContext)
  
  useEffect(() => {
    setPage("Aparelho ortodôntico")
    window.scrollTo(0, 0)
  }, [page])

  return (
    < >
      <h2>Aparelho ortodôntico</h2>
    </>
  )
}

export default Aparelho