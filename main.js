const form = document.getElementById('form-agenda')

const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    atualizaTabela();
}
)

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    


    if (nomes.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já está na agenda`);
    }

    else if (numeros.includes(inputNumeroContato.value)){
        alert(`O telefone ${inputNumeroContato.value} pertence a um contato da agenda`)
    }

    
    else{
        linhas = '';
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let nomesOrdenados = nomes.sort();

        for(let i = 0; i < nomes.length; i++){
            linhas += '<tr>';  
            linhas += `<td>${nomesOrdenados[i]}</td>`;
            linhas += `<td>${numeros[i]}</td>`;
            linhas += '</tr>';
    }
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    console.log(nomes)
    return linhas;    

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = adicionaLinha();
}
