import { useContext, useEffect } from "react"
import { PageContext } from "../../hooks/PageContext";
import "./SobreNos.css";

import image from "../../assets/images/quemsomos.jpeg";

const SobreNos = () => {

  const { page, setPage } = useContext(PageContext)

  useEffect(() => {
    setPage("")
  }, [page])

  return (
    <div className="parent">
      <div className="section-image">
        <img src={image} className="rounded float-start" alt="..." />
      </div>
      <div className="side">
        <div className="section-title">
          <h1 className="title">Quem <span>somos</span></h1>
        </div>
        <div className="section-subtitle">
          <p>Clínica Odontológica S3 Odonto: Transformando Sorrisos, Cuidando da sua Saúde Bucal.</p>
        </div>
        <div className="section-text">
          <p>Na S3 Odonto, nossa missão é oferecer serviços odontológicos de qualidade, guiados pelos valores fundamentais da honestidade, dedicação e comprometimento. Acreditamos que cada sorriso é único e merece cuidados especiais. Com uma equipe dedicada e experiente, estamos empenhados em proporcionar não apenas tratamentos odontológicos de excelência, mas também uma experiência que promova a transformação e o bem-estar bucal de nossos pacientes. Na S3 Odonto, seu sorriso é nossa prioridade.</p>
        </div>
      </div>
    </div>
  )
}

export default SobreNos