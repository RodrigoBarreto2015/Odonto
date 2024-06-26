import "./Header.css"

export const Header = () => {
  return (
    <>
      <header>
        <div className="text-header">
          <span className="title">Nossa equipe está disponível para atende-lo de segunda a sexta-feira,
            das 08hrs às 12hrs e das 14hrs às 18hrs.</span><br /><br />
          <span className="subtitle">
            Agende sua consulta conosco hoje mesmo e
            descubra como podemos ajuda-lo a manter um sorriso saudável e bonito!
          </span>
        </div>
      </header>
      <div className="vstack gap-1">
        <div className="p-2">Nossa equipe está disponível para atende-lo de segunda a sexta-feira,
          das 08hrs às 12hrs e das 14hrs às 18hrs. E aos sábados de 08hrs às 12hrs.</div>
        <div className="p-2">Agende sua consulta conosco hoje mesmo e
          descubra como podemos ajuda-lo a manter um sorriso saudável e bonito!</div>
      </div>
    </>
  )
}
