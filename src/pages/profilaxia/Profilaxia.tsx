import { useContext, useEffect } from "react"
import { PageContext } from "../App"

const Profilaxia = () => {
  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Limpeza dental")
  }, [page])

  return (
    <>
      <h2>Profilaxia (Limpeza)</h2>
    </>
  )
}

export default Profilaxia