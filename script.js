const button = document.querySelector('.button'); 
const saudacao = document.querySelector('.saudacao'); 

button.addEventListener('click',MostrarSaudacao);

function MostrarSaudacao()
{
    saudacao.innerHTML = "Seja bem vindo(A)🖖"
}