const prompt = require('prompt-sync')();

let hamburgueria = [];

function exibirMenu(){
  console.log('\n === MENU DA HAMBURGUERIA ===')
  console.log('1 - Adicionar')
  console.log('2 - Listar')
  console.log('3 - Atualizar')
  console.log('4 - Deletar')
  console.log('5 - Sair')
}

//ADICIONAR HAMBURGUER
function adicionarHamburguer (){

  const nome = prompt('Nome do Hambúrguer: ');
  const preco = prompt('Preço do Hambúrguer: ');
  //Agora preciso adicionar os dados no vetor
  hamburgueria.push({ nome, preco }); 
  // push vai adicionar ao meu vetor nome e preço
  console.log('Hambúrguer adicionado com sucesso!');

}
 //LISTAR HAMBURGUER
function verHamburgueres() {
  if(hamburgueria.lenght === 0){ // condição se o vetor estiver vazio envia mensagem ao usuário  
    console.log('Nenhum hamburguer encontradoo')
    return;
  }
  console.log('\nLista de Hambúrgueres')
  hamburgueria.forEach((burger, index)=>{ //o forEach vai listar
     console.log(`${index + 1}. Nome: ${burger.nome}, Preço: ${burger.preco}`)
  }) 
}

//ATUALIZAR HAMBURGUERES NO ARRAY
function atualizarHamburguer(){
  verHamburgueres(); // chama a função verHamburgueres para saber quais tem para atualizar
  const index = parseInt(prompt('Escolha um burguer para atualizar: '))-1;
  
  if(index < 0 || index >= hamburgueria.length){
    console.log('Número inválido')
    return;
  }

  const novoNome = prompt('Novo nome do Hamburguer: ')
  const novoPreco = prompt('Novo preço do Hamburguer: ')

  hamburgueria[index] = {nome: novoNome, preco: novoPreco}

  console.log('Hamburguer atualizado com sucesso!')

}

//EXCLUIR HAMBURGUER

function deletarHamburguer(){
 verHamburgueres() // primeiro chama a função ver hamburgueres pra listar eles
  const index = parseInt(prompt('Escolha um burguer para deletar: '))-1;

  if(index < 0 || index >= hamburgueria.length){
    console.log('Número inválido')
    return;
  }

  hamburgueria.splice(index, 1); //splice deleta
  console.log('Hambúrguer deletado com sucesso')

}


function principal(){
  let opcao;
  
  do{
      exibirMenu()

      opcao = parseInt(prompt('Escolha uma opção: '))

      switch(opcao) {

        case 1: 
          adicionarHamburguer();
        break;

        case 2: 
          verHamburgueres();
        break;

        case 3:
          atualizarHamburguer();
        break;

        case 4:
          deletarHamburguer();
        break;

        case 5:
          console.log('Saindo...')
        break;

        default:
          console.log('Opção inválida')
      }
     
  }while(opcao !==5);
    

}
  
principal();




