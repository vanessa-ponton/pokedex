/* eslint-disable react/prop-types */



function NavBar(props) {
    const { pokemonIndex, setPokemonIndex, pokemonList } = props;

    /*const removeProps = (pokemonList) => {
        setPokemonIndex(pokemonList.filter((pokemonIndex.name) => (pokemonIndex.img)  !== (pokemonIndex.name)));
      };*/

    return (
        <div>
            {pokemonList.map((pokemonIndex) => (
                <li key={pokemonIndex.name}>
                    {pokemonIndex.img}
                    <button onClick={() => remove(pokemonIndex.img)}>{pokemonIndex.name}</button>
                </li>
            ))};
        </div>


    )
}

export default NavBar;