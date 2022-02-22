

//chamei o botão
let botao = document.querySelector('#criar-tarefa');
// console.log(botao);
//disse o que o botão precisa fazer
botao.addEventListener("click", function (criarLi) {
    let input = document.querySelector('#texto-tarefa');
    console.log(input);
    //criei um container onde sera adicionado as listas
    let container = document.getElementById('lista-tarefas');
    // console.log(container);
    let newLi = document.createElement('li');
    // console.log(newLi);
    newLi.innerText = input.value;
    console.log(input);
    container.appendChild(newLi);
    input.value = '';

})
// busquei a ol para criar um evento de click ao final
    let buscarOl = document.querySelector('ol');
//criei uma função para trocar o fundo
function trocarFundo(event) {
    //criei uma variavel para chamar a li
    let lista = document.getElementsByTagName('li');
    // fiz um for para percorrer a lista
    for (let index = 0; index < lista.length; index += 1) {
           lista[index].style.backgroundColor = null;
        }
    //implementando o evento
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    buscarOl.addEventListener('click', trocarFundo);

    //chamando o botão de apagar
    let btApaga = document.querySelector('#apaga-tudo');
    
    function apagaLista(){
        buscarOl.innerText = '';
    }
    btApaga.addEventListener('click', apagaLista );