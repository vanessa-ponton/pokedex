import PropTypes from "prop-types";

function PokemonCard(props) {
  const { pokemon } = props;
  console.log(props);

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isOptionnal,
    }).isRequired,
  }

  return (
    <figure>
      {pokemon.imgSrc ? (<img src={pokemon.imgSrc} />) : (<p>???</p>)}
      <figcaption >{pokemon.name}</figcaption>
    </figure>

  );
}


export default PokemonCard;
