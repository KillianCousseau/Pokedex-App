const NavBar = ({
  pokemonIndex,
  pokemonList,
  previousPokemon,
  nextPokemon,
}) => {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name}>{pokemon.name}</button>
      ))}
    </>
  );
};

export default NavBar;
