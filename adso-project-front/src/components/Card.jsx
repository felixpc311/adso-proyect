import { Link } from "react-router-dom"
import imagen from '../assets/pexels-mirrographer-1164572.jpg'
import "../styles/Card.css"

export default function Card() {
  return (
    <div className="tarjeta">
        <div className="titulo">
            Colegio
        </div>
        <div className="cuerpo">
            <img src={imagen} alt="a school" />
            Descripcion
        </div>
        <div className="foot">
            <Link href="#">Mas informacion</Link>
        </div>
    </div>
  )
}
