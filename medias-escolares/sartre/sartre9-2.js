//Be Carefull super clean code ahead

function num_max(x, y){
    if (y<Number(x.value)){
        return y
    }
    if (Number(x.value)<0){
        return 0
    }
    return Number(x.value)
}
function calcular_artes(){
    var a1 = document.getElementById("atv1Artes-2")
    a1.value = num_max(a1, 5)
    var a2 = document.getElementById("atv2Artes-2")
    a2.value = num_max(a2, 5)
    var pt = document.getElementById("projetoTeatroArtes-2")
    pt.value = num_max(pt, 10)
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
    pl.value = num_max(pl, 10)
    var pt = document.getElementById("projetoTeatroRed-2")
    pt.value = num_max(pt, 10)
    var a1 = document.getElementById("atv1Red-2")
    a1.value = num_max(a1, 10)
    var a2 = document.getElementById("atv2Red-2")
    a2.value = num_max(a2, 10)
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
    ad.value = num_max(ad, 10)
    var ap1 = document.getElementById("ap1Port-2")
    ap1.value = num_max(ap1, 4)
    var ap2 = document.getElementById("ap2Port-2")
    ap2.value = num_max(ap2, 4)
    var ap3 = document.getElementById("ap3Port-2")
    ap3.value = num_max(ap3, 4)
    var enem = document.getElementById("avEnemPort-2")
    enem.value = num_max(enem, 10)
    var az = document.getElementById("folhaAzPort-2")
    az.value = num_max(az, 10)
    var pl = document.getElementById("projetoLeitura2-2")
    pl.value = num_max(pl, 10)
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
    var ad = document.getElementById("adMat-2")
    ad.value = num_max(ad, 10)
    var ap1 = document.getElementById("ap1Mat-2")
    ap1.value = num_max(ap1, 4)
    var ap2 = document.getElementById("ap2Mat-2")
    ap2.value = num_max(ap2, 4)
    var ap3 = document.getElementById("ap3Mat-2")
    ap3.value = num_max(ap3, 4)
    var enem = document.getElementById("avEnemMat-2")
    enem.value = num_max(enem, 10)
    var az = document.getElementById("folhaAzMat-2")
    az.value = num_max(az, 10)
    var r = ((Number(ad.value) * 5) + (((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))) * 2.5) + Number(enem.value) + Number(az.value)) / 10
    if (r >= 6){
        mat.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        mat.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}
function calcular_hist(){
    var hist = document.getElementById("notaHist-2")
    var ad = document.getElementById("adHist-2")
    ad.value = num_max(ad, 10)
    var ap1 = document.getElementById("ap1Hist-2")
    ap1.value = num_max(ap1, 4)
    var ap2 = document.getElementById("ap2Hist-2")
    ap2.value = num_max(ap2, 4)
    var ap3 = document.getElementById("ap3Hist-2")
    ap3.value = num_max(ap3, 4)
    var enem = document.getElementById("avEnemHist-2")
    enem.value = num_max(enem, 10)
    var az = document.getElementById("folhaAzHist-2")
    az.value = num_max(az, 10)
    var r = ((Number(ad.value) * 5) + (((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))) * 2.5) + Number(enem.value) + Number(az.value)) / 10
    if (r >= 6){
        hist.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        hist.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}

function calcular_geo(){
    var geo = document.getElementById("notaGeo-2")
    var ad = document.getElementById("adGeo-2")
    ad.value = num_max(ad, 10)
    var ap1 = document.getElementById("ap1Geo-2")
    ap1.value = num_max(ap1, 4)
    var ap2 = document.getElementById("ap2Geo-2")
    ap2.value = num_max(ap2, 4)
    var ap3 = document.getElementById("ap3Geo-2")
    ap3.value = num_max(ap3, 4)
    var enem = document.getElementById("avEnemGeo-2")
    enem.value = num_max(enem, 10)
    var az = document.getElementById("folhaAzGeo-2")
    az.value = num_max(az, 10)
    var r = ((Number(ad.value) * 5) + (((Number(ap1.value) + Number(ap2.value) + Number(ap3.value))) * 2.5) + Number(enem.value) + Number(az.value)) / 10
    if (r >= 6){
        geo.innerHTML = `<span style="color: green;">${r.toFixed(2)}</span>`
    }else{
        geo.innerHTML = `<span style="color: red;">${r.toFixed(2)}</span>`
    }
}

function calcular_cie(){
    var ad1 = document.getElementById("adBio-2")
    ad1.value = num_max(ad1, 10)
    var ad2 = document.getElementById("adFis-2")
    ad2.value = num_max(ad2, 10)
    var ad3 = document.getElementById("adQui-2")
    ad3.value = num_max(ad3, 10)
    var ad = (Number(ad1.value) + Number(ad2.value) + Number(ad3.value))/3
    var pc = document.getElementById("pc-2")
    pc.value = num_max(pc, 10)
    var ap1 = document.getElementById("ap1Cie-2")
    ap1.value = num_max(ap1, 4)
    var ap2 = document.getElementById("ap2Cie-2")
    ap2.value = num_max(ap2, 4)
    var ap3 = document.getElementById("ap3Cie-2")
    ap3.value = num_max(ap3, 4)
    var enem = document.getElementById("avEnemCie-2")
    enem.value = num_max(enem, 10)
    var az = document.getElementById("folhaAzCie-2")
    az.value = num_max(az, 10)
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


