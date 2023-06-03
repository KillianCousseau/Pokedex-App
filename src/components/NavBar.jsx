import "./Components.css";

const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  return (
    <div id="nav">
      {pokemonList.map((pokemon, index) => (
        <button
          className={pokemon.name}
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
