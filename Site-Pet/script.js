/*CARROSSEL*/
contador = 1
document.getElementById("radio1").checked = true
setInterval(function(){
  proximaImg()
}, 4000)

function proximaImg(){
  contador++
  if(contador > 2){
    contador = 1
  }
  document.getElementById("radio" + contador).checked = true
}

/*CARD COM SOMBRA*/
function expandCard(card){
  card.style.transform ='scale(1.05)'
  card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)'
}

function shinkCard(card){
  card.style.transform ='scale(1)'
  card.style.boxShadow = 'none'
}


/*CARRINHO*/ 

carrinho = document.querySelector('.carrinho')

function adicionarAoCarrinho(){
  alert('Você não tem nenhum produto no carrinho.\nAdicione itens!')
}

carrinho.addEventListener('click', adicionarAoCarrinho)


/*FAVORITOS*/

favoritos = document.querySelector('.favoritos')

function adicionarAosFavs(){
  alert('Você não tem nenhum produto favoritado.\nFavorite itens!')
}

favoritos.addEventListener('click', adicionarAosFavs)


/*BOTÃO: COMPRAR*/

comprar = document.querySelector('.prod-comprar')

function comprando(){
  
  do{
    qtd = parseInt(prompt('Quantidade:'))

    if(qtd <= 0 || isNaN(qtd)){
      alert('Informe uma quantidade válida!\nDigite um valor positivo.')
    }
  } while(qtd <= 0 || isNaN(qtd));

  do{
    formaDePag = prompt('Digite qual a Forma de pagamento: \n1 - Débito ou Pix \n2 - Crédito')
    
    if(formaDePag != '1' && formaDePag != '2'){
      alert('Informe uma das formas de pagamento!\nEscolha 1 ou 2.')
    }
  } while(formaDePag != '1' && formaDePag != '2')

  parcelas = 0
  
  if(formaDePag == 2){
    parcelas = parseInt(prompt('Nº de Parcelas:'))
  }
  
  prodNome = document.querySelector('.prod-nome').textContent

  alert('Compra realizada com sucesso!\nAgradecemos a preferência')
  
  alert(`COMPROVANTE:\nProduto: ${prodNome}\nQuantidade: ${qtd}\nForma de Pagamento: ${formaDePag}\nParcelas: ${parcelas}`)

}

comprar.addEventListener('click', comprando)