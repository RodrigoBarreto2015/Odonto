import "./Button.css"
import { Button } from 'react-bootstrap';

interface Props {
    text: string, 
    onClick?: () => void
} 

const ButtonGlobal = ({ text }: Props) => {
  return (
    <Button style={{ width: '100%', color: '#fff', backgroundColor: `var(--secondary)`, border: 'none' }}>{text}</Button>
  )
}

export default ButtonGlobal