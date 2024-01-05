let getOL = document.body.querySelector('#lista-tarefas');
let getBotao = document.body.querySelector('#criar-tarefa');
let getImput = document.body.querySelector('#texto-tarefa');
let getBotaoLimpa = document.body.querySelector('#apaga-tudo')
let getBotaoApaga = document.body.querySelector('#remover-finalizados')


getBotao.addEventListener('click', function(){
    let criaLI = document.createElement('li');
    let textoImput = getImput.value;
    if(textoImput.trim() !== ''){
        getOL.appendChild(criaLI);
        criaLI.innerText = textoImput;
        getImput.value = '';

        criaLI.addEventListener('click', function(){
            let getLI = document.body.querySelectorAll('li');
            for(let index = 0; index < getLI.length; index += 1){
                getLI[index].style.backgroundColor = '';
            }
            criaLI.style.backgroundColor = 'grey';
        });

        criaLI.addEventListener('dblclick', function(){
            let getLI = document.body.querySelectorAll('li');
            criaLI.classList.add('completed');
        });

        getBotaoLimpa.addEventListener('click', function(){
            let getLI = document.body.querySelectorAll('li');
            for(let index = 0; index < getLI.length; index += 1){
                getLI[index].remove();
            }
        })

        getBotaoApaga.addEventListener('click', function(){
            let getLiClass = document.body.querySelectorAll('.completed');
            for(let index = 0; index < getLiClass.length; index += 1){
                getLiClass[index].remove();
            }
        })

    }
});
