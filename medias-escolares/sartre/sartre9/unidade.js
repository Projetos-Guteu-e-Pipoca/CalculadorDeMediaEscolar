function unidade() {
    var unidade = window.document.getElementsByName('unidade')
    var unidade2 = window.document.getElementById('ano9-2')
    var unidade4 = window.document.getElementById('ano9-4')
    if (unidade[0].checked) {
        unidade2.style.display = 'block'
        unidade4.style.display = 'none'
    } else if (unidade[1].checked){
        unidade2.style.display = 'none'
        unidade4.style.display = 'block'
    }
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