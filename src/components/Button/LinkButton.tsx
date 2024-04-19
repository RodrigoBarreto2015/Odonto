import { Link } from "react-router-dom";
import "./Button.css"
import { Button } from 'react-bootstrap';

interface Props {
  text: string,
  link: string
}

const LinkButtonGlobal = ({ text, link }: Props) => {
  return (
    <Link to={link}><Button className='btn'>{text}</Button></Link>
  )
}

export default LinkButtonGlobal