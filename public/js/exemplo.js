const nome = "Rafael Trindade";
let nome2 = "";
let pessoaDefault = {
    nome: "Rafael Trindade",
    idade: "36",
    trabalho: "professor"
}

let nomes = ["Rafael Trindade", "Lucas Trindade", "Maria Luján"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Rafael Trindade",
        idade: "36",
        trabalho: "professor"  
    },
    {
        nome: "Lucas Trindade",
        idade: "2",
        trabalho: "rei"
    }
];

function alterarNome() {
    nome2 = "Maria Luján";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("------------IMPRIMIR PESSOAS-----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa ({
        nome: "Maria Luján",
        idade: "36",
        trabalho: "cientista de dados"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Lucas Trindade",
//    idade: "2",
//    trabalho: "rei"})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");
//alterarNome();