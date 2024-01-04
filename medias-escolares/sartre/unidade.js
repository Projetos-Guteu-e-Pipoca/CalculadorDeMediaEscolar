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