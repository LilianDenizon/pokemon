import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

function CartDetails() {

    const {id} = useParams()
    const { data: pokemon, loading, error } = useFetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);

    console.log(pokemon)
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error}</p>;

    return (
        <>
            <img src={pokemon.sprite} alt="" />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.stat}</p>
        </>
    )
}

export default CartDetails