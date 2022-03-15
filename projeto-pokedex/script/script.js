let cartaoPokemon = document.querySelectorAll('.cartao-pokemon')

let listagemPokemon = document.querySelectorAll(".pokemon")


listagemPokemon.forEach((pokemon)=>{
   pokemon.addEventListener('click',()=>{

       const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')

       const pokemonIdSelecionado = pokemon.attributes.id.value

      

       const cartaoPokemonAbrir = `cartao-${pokemonIdSelecionado}`
       const acessarcartaoPokemonId = document.getElementById(cartaoPokemonAbrir)
       acessarcartaoPokemonId.classList.add('aberto')


       const pokemonSelecionadoNaListagem = document.querySelector('.ativo')
       pokemonSelecionadoNaListagem.classList.remove('ativo')

       const pokemonParaSelecionarNaListagem = document.getElementById(pokemonIdSelecionado)
       pokemonParaSelecionarNaListagem.classList.add('ativo')



   })
})

