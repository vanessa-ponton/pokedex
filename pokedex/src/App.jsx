
import PokemonCard from "./components/PokemonCard";
import './index.css';
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "charmander",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
            name: "squirtle",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
            name: "pikachu",
            imgSrc:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
            name: "mew",
        },
    ];


    return (
        <div>
            <PokemonCard pokemonSelected={pokemonList[pokemonIndex]} />
            <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
        </div>
    );

}


export default App;
/* */