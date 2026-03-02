import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navigate,useNavigate,useParams } from 'react-router-dom';
import ButtonStyle from './Components/ButtonStyle';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();



  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setLoading(false);
      }
    }

  fetchPokemon();
  }, []);

  if (loading) return <p>Chargement...</p>;


  function handleClick(id) {
    console.log("Objet cliqué")
    navigate(`/CardDetails/${id}`);
  }


  return (
    <>
      <header>
        <h1>POKEDEX</h1>
      </header>

      <div className="page">
        {pokemon.map((pokemon) =>
        (<div key={pokemon.id} className="pokemon-card" onClick={() => handleClick(pokemon.id)}>
              <header>
                {pokemon.name}
                <span class="numero-pokemon">N°0{pokemon.id}</span>
              </header>
            <div class="">
                <img src={pokemon.sprite} alt={pokemon.name} />
                  {Object.entries(pokemon.stats).map(([key, stat]) => (
                    <p>{key} : {stat}</p>
                  ))}
            </div>  
          </div>
          ))}
      </div>
    </>
  );
}

function App(){
  return(
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/nerd">Contact</Link>
          <Link to="/pokedex">Pokedex</Link>
          <ButtonStyle/>


      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pokedex" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}



function Home() {
  return <h1>Page d'accueil</h1>;
}

function About() {
  return <h1>À propos</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function NotFound() {
  return <h1>404 - Page introuvable</h1>;
}

export default App