
import PokemonCard from "./components/PokemonCard";


import './index.css';
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

function App() {
    return (
        <div>
            <PokemonCard />
        </div>

    );
}

export default App;




