

function PokemonCard(props) {
  console.log('props', props);
  const pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption >{pokemon.name}</figcaption>
    </figure>

  );
}



export default PokemonCard;