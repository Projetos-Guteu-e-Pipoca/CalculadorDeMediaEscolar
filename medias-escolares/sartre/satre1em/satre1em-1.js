// um array com todas as matérias, nós vamos dar um loop nisso após o formulario ser enviado.
const materias = [
    "port",
    "mat",
    "hist",
    "geo",
    "fis",
    "qui",
    "bio",
    "fil",
    "soc",
    "red"
]

// Um hash map com as formulas de cada unidade.

const calculosBimestre = {
    "1": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10",
    //"2": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10",
    //"3": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10",
    //"4": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10"
}

// Um hash map com os calulos diferentes.

const calculosEspeciais = {
    "red": {
        "1": "(notas.ad + notas.ao) / 2",
        //"2": "notas.ad + notas.ao",
        //"3": "notas.ad + notas.ao",
        //"4": "notas.ad + notas.ao"
    }
}

const botaoCalcular = document.getElementById("calcularNota");

botaoCalcular.addEventListener(
    "submit",
    function(ev) {
        // Quando um formulário é enviado, a pagina recarrega para enviar os dados para um servidor (que nós não temos)
        // Logo, preventDefault desativa esse comportamento.
        ev.preventDefault();

        // Dar loop pelas matérias.
        materias.forEach(mostarNota)
    },
    {
        // passive é false para não fazer a pagina recarregar após o envio do formulário (comportamento buxa do html)
        passive: false
    }
)

function mostarNota(mat) {
    /**
     * Os inputs de uma matéria (em forma de coleção html)
     * @type {HTMLCollectionOf<HTMLInputElement>}
    */
    const inputsHTML = document.getElementsByClassName(mat)

    // Adiquirir a unidade.
    const unidade = document.getElementById("unidade").value;
    console.log(unidade)

    // Criar um hash map com as notas.
    const notas = {}

    for (input of inputsHTML) {
        // Enche o hash map com informação ( {"NOME DA AVALIAÇÃO (ex.: enem)": NOTA} )
        notas[input.className.split(" ")[1]] = parseFloat(input.value);
    }

    // Adiquirir o elemento da nota (ex.: port = <div id="nota-port"></div>)
    const notaDisplay = document.getElementById(`nota-${mat}`)

    // Mesma coisa porem com o PP.
    const ppDisplay = document.getElementById(`pp-${mat}`)

    let nota = 0;

    // Se o hash map dos calculos especiais tiverem um elemento para aquela matéria E unidade:
    if(calculosEspeciais[mat] !== undefined && calculosEspeciais[mat][unidade] !== undefined) {
        // Rodar o calculo especial e guardar o resultado na variável nota.
        nota = eval(calculosEspeciais[mat][unidade]);
    } else {
        // Caso contrário... Rodar o calculo normal.
        nota = eval(calculosBimestre[unidade]);
    }

    // Alterar a nota final.

    notaDisplay.innerText = nota.toFixed(2);
    //para mudar o calculo do pp baseado no peso da unidade
    ppDisplay.innerText = unidade == 1 || unidade == 3 ? nota.toFixed(2) * 2 : nota.toFixed(2) * 3;
}

// Aqui teriamos a função que avisava que os valores inseridos estavam incorretos
// porém inputs + um input de type "submit" já cuida de valores ilegais para nós, então
// essa função foi de vasco!

const setas_contato = document.getElementsByClassName("seta-contato")
const texts_contato = document.getElementsByClassName("texto-contato")
const nomes_contato = document.getElementsByClassName("nome-contato")
let c = []
for (let i=0;i<setas_contato.length; i++){
    c[i] = 0
    setas_contato[i].innerHTML = "<span class='fa-solid fa-arrow-down'></span>"
    texts_contato[i].style.display = "none"
    nomes_contato[i].addEventListener("click", function (){
        c[i]++
        if ((c[i]/2)%1!=0){
            texts_contato[i].style.display = "block"
            setas_contato[i].innerHTML = "<span class='fa-solid fa-arrow-up'></span>"
        }else{
            texts_contato[i].style.display = "none"
            setas_contato[i].innerHTML = "<span class='fa-solid fa-arrow-down'></span>"
    }
})}
