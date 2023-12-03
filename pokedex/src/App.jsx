
import PokemonCard from "./components/PokemonCard";
import './index.css';
import { useState } from "react";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "mew",
        },
    ];
    const pokemonSelected = pokemonList[0];
    const handleClick = () => {
        setPokemonIndex("suivant" + 1);
        setPokemonIndex("précédent" - 1);
    }

    return (
        <div>
            <PokemonCard pokemon={pokemonSelected} />

            <p>{"suivant"} {"précédent"}</p>
            <button onClick={handleClick}>Click</button>

        </div>
    );

}


export default App;




