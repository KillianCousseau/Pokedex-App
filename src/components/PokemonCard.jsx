import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const getImg = (object) => {
    if (object.imgSrc) {
      return <img src={object.imgSrc} alt={object.name} />;
    } else {
      return <p>???</p>;
    }
  };

  return (
    <figure>
      {getImg(pokemon)}
      <figcaption>{pokemon.name}</figcaption>
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
