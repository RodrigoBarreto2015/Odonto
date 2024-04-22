import { useContext, useEffect } from "react"
import ServicoCards from "../../components/ServicoCards/ServicoCards"
import { PageContext } from "../../hooks/PageContext"

const Home = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <ServicoCards />
    </>
  )
}

export default Home