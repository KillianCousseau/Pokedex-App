const NavBar = ({ pokemonIndex, pokemonList, setPokemonIndex }) => {
  if (pokemonIndex === 3) {
    alert("pika pikachu !!!");
  }

  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Previous
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>Next</button>
      )}
    </>
  );
};

export default NavBar;
