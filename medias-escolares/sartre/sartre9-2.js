function calcular_artes(){
    var a1 = document.getElementById("atv1Artes-2")
    var a2 = document.getElementById("atv2Artes-2")
    var pt = document.getElementById("projetoTeatroArtes-2")
    var a = document.getElementById("notaArtes-2")
    var r = (Number(a1.value) + Number(a2.value) + Number(pt.value))/2
    if (r >= 6){
        a.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        a.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}
function calcular_redacao(){
    var pl = document.getElementById("projetoLeitura1-2")
    var pt = document.getElementById("projetoTeatroRed-2")
    var a1 = document.getElementById("atv1Red-2")
    var a2 = document.getElementById("atv2Red-2")
    var r = ((Number(a1.value)*4) + (Number(a2.value)*3) + (Number(pl.value)*2) + Number(pt.value))/10
    var red = document.getElementById("notaRed-2")
    if (r >= 6){
        red.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        red.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}
function calcular_port(){
    var ad = document.getElementById("adPort-2")
    var ap1 = document.getElementById("ap1Port-2")
    var ap2 = document.getElementById("ap2Port-2")
    var ap3 = document.getElementById("ap3Port-2")
    var enem = document.getElementById("avEnemPort-2")
    var az = document.getElementById("folhaAzPort-2")
    var pl = document.getElementById("projetoLeitura2-2")
    var port = document.getElementById("notaPort-2")
    var r = ((Number(ad.value)*4) + Number(pl.value) + ((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))*2.5) + Number(enem.value) + Number(az.value))/10
    if (r >= 6){
        port.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        port.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}   
function calcular_mat(){
    var mat = document.getElementById("notaMat-2")
    var ad = Number((document.getElementById("adMat-2")).value) 
    var ap1 = Number((document.getElementById("ap1Mat-2")).value) 
    var ap2 = Number((document.getElementById("ap2Mat-2")).value) 
    var ap3 = Number((document.getElementById("ap3Mat-2")).value) 
    var enem = Number((document.getElementById("avEnemMat-2")).value) 
    var az = Number((document.getElementById("folhaAzMat-2")).value)
    var r = ((ad*5) + ((ap1+ap2+ap3)*2.5) + enem + az)/10
    if (r >= 6){
        mat.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        mat.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}
function calcular_hist(){
    var hist = document.getElementById("notaHist-2")
    var ad = Number((document.getElementById("adHist-2")).value) 
    var ap1 = Number((document.getElementById("ap1Hist-2")).value) 
    var ap2 = Number((document.getElementById("ap2Hist-2")).value) 
    var ap3 = Number((document.getElementById("ap3Hist-2")).value) 
    var enem = Number((document.getElementById("avEnemHist-2")).value) 
    var az = Number((document.getElementById("folhaAzHist-2")).value)
    var r = ((ad*5) + ((ap1+ap2+ap3)*2.5) + enem + az)/10
    if (r >= 6){
        hist.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        hist.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}

function calcular_geo(){
    var geo = document.getElementById("notaGeo-2")
    var ad = Number((document.getElementById("adGeo-2")).value) 
    var ap1 = Number((document.getElementById("ap1Geo-2")).value) 
    var ap2 = Number((document.getElementById("ap2Geo-2")).value) 
    var ap3 = Number((document.getElementById("ap3Geo-2")).value) 
    var enem = Number((document.getElementById("avEnemGeo-2")).value) 
    var az = Number((document.getElementById("folhaAzGeo-2")).value)
    var r = ((ad*5) + ((ap1+ap2+ap3)*2.5) + enem + az)/10
    if (r >= 6){
        geo.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        geo.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}

function calcular_cie(){
    var ad1 = document.getElementById("adBio-2")
    var ad2 = document.getElementById("adFis-2")
    var ad3 = document.getElementById("adQui-2")
    var ad = (Number(ad1.value) + Number(ad2.value) + Number(ad3.value))/3
    var pc = document.getElementById("pc-2")
    var ap1 = document.getElementById("ap1Cie-2")
    var ap2 = document.getElementById("ap2Cie-2")
    var ap3 = document.getElementById("ap3Cie-2")
    var enem = document.getElementById("avEnemCie-2")
    var az = document.getElementById("folhaAzCie-2")
    var cie = document.getElementById("notaCie-2")
    r = ((ad*4) + (Number(pc.value)*2) + (((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))/1.2)*2) + Number(enem.value) + Number(az.value))/10
    if (r >= 6){
        cie.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        cie.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}

function calcular(){
    calcular_artes()
    calcular_redacao()
    calcular_port()
    calcular_mat()
    calcular_hist()
    calcular_geo()
    calcular_cie()
}


