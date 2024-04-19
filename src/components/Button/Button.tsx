import "./Button.css"
import { Button } from 'react-bootstrap';

interface Props {
  text: string
}

const ButtonGlobal = ({ text }: Props) => {
  return (
    <Button className='btn'>{text}</Button>
  )
}

export default ButtonGlobal