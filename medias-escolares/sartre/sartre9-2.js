function calcular_artes(){
    var a1 = document.getElementById("atv1Artes")
    var a2 = document.getElementById("atv2Artes")
    var pt = document.getElementById("projetoTeatroArtes")
    var a = document.getElementById("notaArtes")
    var r = (Number(a1.value) + Number(a2.value) + Number(pt.value))/2
    if (r >= 6){
        a.innerHTML = `<span style="color: green;">${r}</span>`
    }else{
        a.innerHTML = `<span style="color: red;">${r}</span>`
    }
}
function calcular_redacao(){
    var pl = document.getElementById("projetoLeitura1")
    var pt = document.getElementById("projetoTeatroRed")
    var a1 = document.getElementById("atv1Red")
    var a2 = document.getElementById("atv2Red")
    var r = ((Number(a1.value)*4) + (Number(a2.value)*3) + (Number(pl.value)*2) + Number(pt.value))/10
    var red = document.getElementById("notaRed")
    if (r >= 6){
        red.innerHTML = `<span style="color: green;">${r}</span>`
    }else{
        red.innerHTML = `<span style="color: red;">${r}</span>`
    }
}
function calcular_port(){
    var ad = document.getElementById("adPort")
    var ap1 = document.getElementById("ap1Port")
    var ap2 = document.getElementById("ap2Port")
    var ap3 = document.getElementById("ap3Port")
    var enem = document.getElementById("avEnemPort")
    var az = document.getElementById("folhaAzPort")
    var pl = document.getElementById("projetoLeitura2")
    var port = document.getElementById("notaPort")
    var r = ((Number(ad.value)*4) + Number(pl.value) + ((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))*2.5) + Number(enem.value) + Number(az.value))/10
    if (r >= 6){
        port.innerHTML = `<span style="color: green;">${r}</span>`
    }else{
        port.innerHTML = `<span style="color: red;">${r}</span>`
    }
}   
function calcular_mat(){
    var mat = document.getElementById("notaMat")
    var ad = Number((document.getElementById("adMat")).value) 
    var ap1 = Number((document.getElementById("ap1Mat")).value) 
    var ap2 = Number((document.getElementById("ap2Mat")).value) 
    var ap3 = Number((document.getElementById("ap3Mat")).value) 
    var enem = Number((document.getElementById("avEnemMat")).value) 
    var az = Number((document.getElementById("folhaAzMat")).value)
    var r = ((ad*5) + ((ap1+ap2+ap3)*2.5) + enem + az)/10
    if (r >= 6){
        mat.innerHTML = `<span style="color: green;">${r}</span>`
    }else{
        mat.innerHTML = `<span style="color: red;">${r}</span>`
    }
}
function calcular_hist(){
    var hist = document.getElementById("notaHist")
    var ad = Number((document.getElementById("adHist")).value) 
    var ap1 = Number((document.getElementById("ap1Hist")).value) 
    var ap2 = Number((document.getElementById("ap2Hist")).value) 
    var ap3 = Number((document.getElementById("ap3Hist")).value) 
    var enem = Number((document.getElementById("avEnemHist")).value) 
    var az = Number((document.getElementById("folhaAzHist")).value)
    var r = ((ad*5) + ((ap1+ap2+ap3)*2.5) + enem + az)/10
    if (r >= 6){
        hist.innerHTML = `<span style="color: green;">${r}</span>`
    }else{
        hist.innerHTML = `<span style="color: red;">${r}</span>`
    }
}

function calcular(){
    calcular_artes()
    calcular_redacao()
    calcular_port()
    calcular_mat()
}


