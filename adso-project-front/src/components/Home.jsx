import Card from "./Card";

export default function Home() {
  const miCard = {titulo: "Mi Colegio", descripcion: "Ubicado en Monteria, Cordoba", url: "https://ieantoniasantossince.edu.co/", pie: "Más informacion"}
  return (
    <Card{...miCard} />
  )
}
