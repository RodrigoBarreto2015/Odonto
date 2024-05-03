import { Link } from "react-router-dom";
import "./Button.css"
import { Button } from 'react-bootstrap';

interface Props {
  text: string,
  link: string,
  className?: string
}

const LinkButtonGlobal = ({ text, link, className}: Props) => {
  return (
    <Link to={link}><Button className={`btn ${className}`}>{text}</Button></Link>
  )
}

export default LinkButtonGlobal