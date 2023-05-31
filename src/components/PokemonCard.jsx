function PokemonCard(props) {
  console.log(props);

  const getImg = (object) => {
    if (object.imgSrc) {
      return <img src={object.imgSrc} alt={object.name} />;
    } else {
      return <p>???</p>;
    }
  };

  return (
    <figure>
      {getImg(props.pokemon)}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
