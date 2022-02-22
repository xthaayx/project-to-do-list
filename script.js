

//chamei o botão
let botao = document.querySelector('#criar-tarefa');
// console.log(botao);
//disse o que o botão precisa fazer
botao.addEventListener("click" , function(criarLi){
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