import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext"

const Protese = () => {

  const {page, setPage} = useContext(PageContext)

  useEffect(() => {
    setPage("Prótese dentária")
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div className="container" style={{textAlign: "center"}}>
      <h2>Prótese dentária</h2>
      <p>Descubra a arte da reabilitação  oral na nossa clínica, onde realizamos próteses dentárias fixas e removíveis com excelência em beleza, naturalidade e função. Nossa equipe de profissionais experientes está comprometida em proporcionar sorrisos que não apenas parecem naturais, mas também funcionam perfeitamente. Utilizamos materiais de alta qualidade e técnicas avançadas para garantir resultados duradouros e satisfatórios para nossos pacientes. Seja para restaurar a estética do seu sorriso ou para melhorar sua capacidade de mastigação, estamos aqui para oferecer soluções personalizadas que atendam às suas necessidades. Agende uma consulta conosco e descubra como podemos transformar seu sorriso de forma bonita e funcional.</p>
    </div>
  )
}

export default Protese