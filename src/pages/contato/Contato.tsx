import { Card, Col, Container, Row } from 'react-bootstrap'
import { LuPhone } from "react-icons/lu";
import { TfiAgenda } from "react-icons/tfi";
import { ContatoForm } from '../../components/ContatoForm';

const Contato = () => {
  return (
    <Container style={{textAlign: 'center', marginTop: '6vh'}}>
      <h2 >Entre em contato conosco</h2>
      <ContatoForm />
    </Container>
  )
}

export default Contato