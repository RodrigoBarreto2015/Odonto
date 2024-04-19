import { Container } from 'react-bootstrap'
import ServicosCard from '../../components/ServicosCards'

const Home = () => {
  return (
    <Container className='mt-3 text-center justify-content-center'>
      <ServicosCard />
    </Container>
  )
}

export default Home