import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const NotFound = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("")
  }, [page])

  return (
    <>
      <h2>NotFound</h2>
    </>
  )
}

export default NotFound