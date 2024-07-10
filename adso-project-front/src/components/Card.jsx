import { Link } from "react-router-dom"
import imagen from '../assets/pexels-mirrographer-1164572.jpg'
import "../styles/Card.css"

export default function Card({titulo, descripcion, url, pie}) {
  return (
    <div className="tarjeta">
        <div className="titulo">
            {titulo}
        </div>
        <div className="cuerpo">
            <img src={imagen} alt="a school" />
            {descripcion}
        </div>
        <div className="foot">
            <Link to={url}>{pie}</Link>
        </div>
    </div>
  )
}
