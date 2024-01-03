//ad pt, mat, hist, geo, cie
var ad = [0, 0, 0, 0, 0]
ad[1] = document.getElementById("")


function calcular_artes(){
    var a1 = document.getElementById("atv1Artes")
    var a2 = document.getElementById("atv2Artes")
    var pa = document.getElementById("projetoTeatroArtes")
    var a = document.getElementById("notaArtes")
    var r = (a1.value + a2.value + pa.value)/2
    a.value = r
}

function calcular(){
    calcular_artes()
}


