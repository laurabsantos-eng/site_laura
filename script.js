//variavel para guardar o botão

const botao = document.getElementById('tema');
const icone = botao.querySelector('i');

//Busca na memoria do navegador a opção que o usuario tinha escolhido de tema
const salvaTema = localStorage.getItem('theme');

//Se o tema salvo na memoria localStorage for tema escuro

if (salvaTema === 'dark'){
    //adiciona a classe 'dark-mode' no corpo da pagina
    document.body.classList.add('dark-mode');
    //troca o icone de lua ('fa-moon') para um icone de sol
    icone.classList.replace('fa-moon', 'fa-sun');
} 

//Quando clicar no botão ele vai exeacutar o codigo abaixo

botao.addEventListener('click', () =>{
    //Liga ou esliga a classe dark-mode
    document.body.classList.toggle('dark-mode');

    //Verificar se a pagina ficou com o modo escuro ativo
    const dark = document.body.classList.contains('dark-mode');

    //Se o modo escuro estiver ativado (verdadeiro)
    if(dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }else{
        //troca o sol de volta para a lua
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});