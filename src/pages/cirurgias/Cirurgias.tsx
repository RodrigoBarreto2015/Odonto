import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Cirurgias = () => {
  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("Cirurgia e extração")
    window.scrollTo(0, 0)
  }, [page])
  return (
    <div className="container" >
      <h2>Cirurgias e extrações</h2>
      <p>Em nossa clínica, oferecemos cirurgias e extrações dentárias com um toque humano. Compreendemos que esses procedimentos podem causar apreensão e nervosismo, e é por isso que priorizamos um atendimento gentil e acolhedor em cada etapa do processo. Nossa equipe experiente está aqui para ouvir suas preocupações, explicar os procedimentos de forma clara e fornecer todo o apoio necessário para garantir sua tranquilidade. Utilizamos técnicas avançadas e cuidados meticulosos para realizar cirurgias e extrações com segurança e eficácia. Seja para resolver problemas dentários complexos ou realizar procedimentos de rotina, estamos comprometidos em fornecer um atendimento humanizado e acolhedor. Agende uma consulta conosco e deixe-nos cuidar do seu sorriso com dedicação e profissionalismo.</p>
    </div>
  )
}

export default Cirurgias