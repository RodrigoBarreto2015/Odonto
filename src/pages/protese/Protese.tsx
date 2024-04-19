import { useContext, useEffect } from "react"
import { PageContext } from "../App"

const Protese = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Prótese dentária")
  }, [page])

  return (
    <>
      <h2>Prótese dentária</h2>
    </>
  )
}

export default Protese