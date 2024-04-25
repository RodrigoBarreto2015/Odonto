import "./Header.css"

export const Header = () => {
  return (
    <>
      <header>
        <div className="text-header">
          <p>Nossa equipe está disponível para atende-lo de segunda a sexta-feira,
            das 08hrs às 12hrs e das 14hrs às 18hrs.</p>
          <span>
            Agende sua consulta conosco hoje mesmo e
            descubra como podemos ajuda-lo a manter um sorriso saudável e bonito!
          </span>
        </div>
      </header>
      <div className="vstack gap-3">
        <div className="p-2">Nossa equipe está disponível para atende-lo de segunda a sexta-feira,
          das 08hrs às 12hrs e das 14hrs às 18hrs.</div>
        <div className="p-2">Agende sua consulta conosco hoje mesmo e
          descubra como podemos ajuda-lo a manter um sorriso saudável e bonito!</div>
      </div>
    </>
  )
}
