/* eslint-disable react/prop-types */

function NavBar(props) {
  const { pokemonIndex, setPokemonIndex, pokemonList } = props;

  const handleClick = (e) => {
    setPokemonIndex(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      {pokemonList.map((pokemonIndex, i) => (
        <div key={i}>
          {pokemonIndex.img}
          <button value={i} onClick={handleClick}>
            {pokemonIndex.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
