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
    "2": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10",
    "3": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10",
    "4": "( ( notas.ad * 4 ) + ( notas.ao * 4 ) + notas.enem + notas.az ) / 10"
}

// Um hash map com os calulos diferentes.

const calculosEspeciais = {
    "red": {
        "1": "( notas.ad + notas.ao ) / 2",
        "2": "( notas.ad + notas.ao ) / 2",
        "3": "( notas.ad + notas.ao ) / 2",
        "4": "( notas.ad + notas.ao ) / 2"
    }
}

const pesosUnidades = {
    "1": 2,
    "2": 3,
    "3": 2,
    "4": 3
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
    ppDisplay.innerText = nota.toFixed(2) * (pesosUnidades[unidade] ?? 2); // Caso o peso da unidade não possa ser encontrado, usar 2 como o peso padrão!

    // Decidir as cores.

    ppDisplay.style.color = nota.toFixed(2) * 10 >= 60 ? "green" : "red";
    notaDisplay.style.color = nota.toFixed(2) >= 6 ? "green" : "red";
}

// Aqui teriamos a função que avisava que os valores inseridos estavam incorretos
// porém inputs + um input de type "submit" já cuida de valores ilegais para nós, então
// essa função foi de vasco!

// Pegar todas as setas.
const setasContato = document.getElementsByClassName("fa-arrow-down");

// Dar loop pelas setas
for(seta of setasContato) {
    // Pegar o id da seta, dividir em um array e pegar o ultimo elemento ([].pop() tira o ultimo elemento do array e retorna o elemento removido,
    // nesse caso, pode ser "pipoca" ou "guteu")
    const displayName = seta.id.split("-").pop();

    // Return caso o array esteja vazio! (o que faz o pop retornar undefined)
    if(displayName === undefined) continue;

    // Pegar a caixa de contato.
    const displayElement = document.getElementById(`texto-contato-${displayName}`)

    // Adicionar o event click.
    seta.addEventListener("click", () => {
        // Muda a imagem da seta e a visibilidade da caixa de contato.
        displayElement.style.display = displayElement.style.display === "none" ? "block" : "none";
        // Temos que usar document.getElementById já que mudanças no objeto seta não refletem no HTML.
        const setaHTML = document.getElementById(`seta-contato-${displayName}`);
        setaHTML.className = setaHTML.className === "fa-solid fa-arrow-down" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down";
    });
}
