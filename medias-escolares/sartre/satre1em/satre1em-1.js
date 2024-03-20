// um array com todas as matérias, nós vamos dar um loop nisso após o formulario ser enviado.
let materias = [
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

// A length original do array de matérias
const ogLength = materias.length;

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

// Coisas da unidade:

const extrasDaUnidade = {
    "1": [],
    "2": [
        {
            tipo: "input",
            dados: {
                classeCrua: "hum",
                classe: ["hum proj"],
                minimo: [0],
                maximo: [10],
                nomeTable: "Humanidades",
                displayNota: ["Projeto"],
                materia: true
            }
        }
    ],
    "3": [],
    "4": []
}

/** 
 * isso é uma string já que o valor de `botaoUnidade.value` é também uma string.
*/
let unidade = "1";

const extrasNotas = document.getElementById("extrasNotas");
const extrasMaterias = document.getElementById("extrasMaterias");
const extrasMateriasHead = document.getElementById("extrasMateriasHead");

const botaoUnidade = document.getElementById("unidade");

botaoUnidade.addEventListener("change", () => {
    unidade = botaoUnidade.value;
    mostrarExtras();
})

function mostrarExtras() {
    // Apagar os extras
    apagarMateriasExtras();

    // Adiquirir um array com os extras da unidade.
    const extra = extrasDaUnidade[unidade]
    if(extra.length === 0) return;
    
    // Criar os extras
    extra.forEach(verificarExtras);
}

function apagarMateriasExtras() {
    // Caso uma materia nova tiver sido adicionada, remover ela!
    materias = materias.slice(0, ogLength);
    
    // Juntar TODOS os elementos de lugares onde os extras podem estar.
    const materiasExtras = Array.from(extrasMaterias.children).concat(Array.from(extrasNotas.children), Array.from(extrasMateriasHead.children));
    for (let materia of materiasExtras) {
        // Caso o elemento seja um extra, adeus!
        if(materia.id === "extra") materia.remove();
    }
}

function verificarExtras(extra) {
    switch (extra.tipo) {
        case "input":
            const {dados} = extra

            // Criar a tabela de nota que mostrará a nota da materia (APENAS SE PRECISAR!)
            
            if(dados.materia === true) {
                let nota = document.createElement("tr");
                nota.id = "extra"

                let notaHead = document.createElement("th");
                notaHead.innerText = dados.nomeTable

                let media = document.createElement("td");
                let pp = document.createElement("td");

                media.id = `nota-${dados.classeCrua}`
                pp.id = `pp-${dados.classeCrua}`

                nota.append(notaHead, media, pp);

                extrasNotas.append(nota);
            }

            const ogHeadLength = extrasMateriasHead.children.length - 1

            // Criar os inputs

            let inputHead = document.createElement("tr");
            inputHead.id = "extra"

            let materiaTh = document.createElement("th");
            materiaTh.innerText = dados.nomeTable

            inputHead.append(materiaTh) 

            dados.classe.forEach((_classe, index) => {
                let displayNota = dados.displayNota[index];

                let materiaHead = document.createElement("th");
                materiaHead.id = "extra"
                materiaHead.innerText = displayNota

                extrasMateriasHead.append(materiaHead);
            })

            for (let i = 0; i < ogHeadLength; i++) {
                inputHead.append(document.createElement("td")); // Criar espaço ate a head correta.
            }

            dados.classe.forEach((classe, index) => {
                let classeInput = document.createElement("td");

                let divFlex = document.createElement("div");

                divFlex.className = "flex"

                let input = document.createElement("input");

                input.className = classe

                input.min = dados.minimo[index];
                input.max = dados.maximo[index];

                input.type = "number"
                input.placeholder = "0"
                input.value = "0"

                divFlex.append(input);

                classeInput.append(divFlex);

                inputHead.append(classeInput)

                extrasMaterias.append(inputHead);
            })      
        break;
    }
}

// Chamar a func. caso tenha algum extra na 1ª unidade.
mostrarExtras()

// Coisas do calculo:
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
