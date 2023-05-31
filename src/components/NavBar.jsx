const NavBar = ({
  pokemonIndex,
  pokemonList,
  previousPokemon,
  nextPokemon,
}) => {
  return (
    <>
      {pokemonIndex > 0 && <button onClick={previousPokemon}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Next</button>
      )}
    </>
  );
};

export default NavBar;
