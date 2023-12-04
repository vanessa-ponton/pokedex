

import PokemonCard from "./components/PokemonCard";
import './index.css';
import { usePokemonIndex } from "react";

function App() {
    const [pokemonIndex, setPokemonIndex] = usePokemonIndex(0);

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

            <p>{pokemonIndex} ${"suivant"}, ${"précédent"}</p>
            <button onClick={handleClick}>Click</button>

        </div>
    );

}


export default App;









