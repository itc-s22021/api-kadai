import { useState } from 'react'

const fetchPokemon = async () => {
  const index = Math.floor(Math.random() * 905 + 1)
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + index)
  const result = await res.json()
  return result
}
fetchPokemon().then((pokemon) => {
  console.log(`図鑑番号: ${pokemon.id}`)
  console.log(`名前: ${pokemon.name}`)
  console.log(`画像URL: ${pokemon.sprites.front_default}`)
})

const IndexPage = () => {
  const [pokemonID, setPokemonID] = useState(
    887
  )
  const [pokemonName, setPokemonName] = useState(
    'dragapult'
  )
  const [pokemonImageUrl, setPokemonImageUrl] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png'
  )

  const handleClick = async () => {
    const pokemon = await fetchPokemon()
    setPokemonID(pokemon.id)
    setPokemonName(pokemon.name)
    setPokemonImageUrl(pokemon.sprites.front_default)
  }

  return (
    <div>
      <button onClick={handleClick}>チェンジ</button>
      <div>
        <img src={pokemonImageUrl} />
        <p>{pokemonID} {pokemonName}</p>
      </div>

    </div>
  )
}

export default IndexPage
