function PokemonCard() {
  const pokemon = pokemonList[1];

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

export default PokemonCard;
