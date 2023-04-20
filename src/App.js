import "./App.css";
import PageWrapper from "./pageWrapper";
import Pelicula from "./Peliculas";
import PeliculasJson from "./peliculas.json"

function App() {
  let peliculas = PeliculasJson;

  return (
    <PageWrapper>

      {peliculas.map(pelicula => 
        <Pelicula
        titulo={pelicula.titulo}
        calificacion={pelicula.calificacion}
        director={pelicula.director}
        actores={pelicula.actores}
        fecha={pelicula.fecha}
        duracion={pelicula.duracion}
        img={pelicula.img}>
        {pelicula.descripcion}
        </Pelicula>
      )}
        <paginacion pagina={2} total={4} onChange={(pagina) => {
           alert(pagina)
        }} />
    </PageWrapper>
  );
}
export default App;
