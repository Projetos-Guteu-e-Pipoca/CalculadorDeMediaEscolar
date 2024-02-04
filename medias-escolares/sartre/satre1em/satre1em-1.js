function calcular_1() {
    //calcular portugues
    let notas_html = []
    notas_html[0] = document.getElementsByClassName("port-1")
    notas_html[1] = document.getElementsByClassName("mat-1")
    notas_html[2] = document.getElementsByClassName("hist-1")
    notas_html[3] = document.getElementsByClassName("geo-1")
    notas_html[4] = document.getElementsByClassName("fis-1")
    notas_html[5] = document.getElementsByClassName("qui-1")
    notas_html[6] = document.getElementsByClassName("bio-1")
    notas_html[7] = document.getElementsByClassName("fil-1")
    notas_html[8] = document.getElementsByClassName("soc-1")
    notas_html[9] = document.getElementsByClassName("red-1")
    let notas = document.getElementsByClassName("nota-1")

    
    for (let i=0; i<notas_html.length; i++){
        if (i == 9){ //calcular redação
            notas[i].innerText = Number(notas_html[9][0].value) + Number(notas_html[9][1].value)
        } else{
            notas[i].innerText = calcular_p_m_h_g_f_q_b_f_s(notas_html[i])
        }

        //deixar o numero verde ou vermelho dependendo da nota
        if (Number(notas[i].innerText) < 6){
            notas[i].style.color = "red"
        } else{
            notas[i].style.color = "green"
        }
    }
}

//calcular port mat hist geo fis qui fil soc
function calcular_p_m_h_g_f_q_b_f_s(array){
    let v = []
    for (let i=0; i<array.length; i++){
        v[i] = Number(array[i].value)
    }
    return ((v[0]*4)+(v[1]*4)+v[2]+v[3])/10
}

const hp = document.getElementsByClassName("hp-1")
const hpt = document.getElementsByClassName("hpt-1")
const inputs = document.getElementsByClassName("inputs-1")

//helper text display
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        const inputValue = parseFloat(this.value)
        if (i==36 || i==37){
            if (inputValue > 5 || inputValue < 0){
                hp[i].style.display = "block"
            }else{
                hp[i].style.display = "none"
            }
        }else{
        if (inputValue > 10 || inputValue < 0) {
            hp[i].style.display = "block"
        } else {
            hp[i].style.display = "none"
        }}
    })
    inputs[i].addEventListener("click", function() {
        inputs[i].value = null
    })
    
    hp[i].addEventListener("click", function(event) {
        event.stopPropagation()
        hpt[i].style.display = "block"
        if (i==36 || i==37){
            hpt[i].innerText = "Esta prova vale de 0 a 5"
        }else{
            hpt[i].innerText = "Esta prova vale de 0 a 10"
        }
    })

    document.addEventListener("click", function() {
        hpt[i].style.display = "none"
    })
}

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