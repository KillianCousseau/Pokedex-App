import PropTypes from "prop-types";
import "./Components.css";

function PokemonCard({ pokemon }) {
  const getImg = (object) => {
    if (object.imgSrc) {
      return <img src={object.imgSrc} alt={object.name} />;
    } else {
      return <p>???</p>;
    }
  };

  return (
    <figure className={pokemon.name}>
      {getImg(pokemon)}
      <figcaption>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
