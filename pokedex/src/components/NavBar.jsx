/* eslint-disable react/prop-types */



function NavBar(props) {
    const { pokemonIndex, setPokemonIndex, pokemonList } = props;

    const handleClick = () => {
        setPokemonIndex(pokemonIndex + 1);
    }
    const handleClicked = () => {
        setPokemonIndex(pokemonIndex - 1);
    }

    return (
        <div>
            {pokemonIndex < pokemonList.length - 1 &&
                <button onClick={handleClick}>suivant</button>}
            {pokemonIndex > 0 &&
                <button onClick={handleClicked}>précédent</button>}
        </div>
    );
}

export default NavBar;