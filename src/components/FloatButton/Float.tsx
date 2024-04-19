import { useContext, useEffect, useState} from "react";
import "./Float.css";
import { PageContext } from "../../pages/App";

const Float = () => {

    const {page} = useContext(PageContext)
    
    const [text, setText] = useState(page)

    useEffect(() => {
        setText(page)
    }, [page])

    const handleFloatClick = () => {
        if (text == "") {
            window.open("https://api.whatsapp.com/send?phone=5585987550023&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%3F")
        } else {
            window.open(`https://api.whatsapp.com/send?phone=5585987550023&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+referente+a%3A+${text}%3F`)
        }
    }

    return (
        <a onClick={handleFloatClick} className="float">
            <i className="my-float"></i>
        </a>
    )
}

export default Float