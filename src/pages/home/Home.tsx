import { useContext, useEffect } from "react"
import ServicoCards from "../../components/ServicoCards/ServicoCards"
import { PageContext } from "../App"

const Home = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("")
  }, [page])

  return (
    <>
      <ServicoCards />
    </>
  )
}

export default Home