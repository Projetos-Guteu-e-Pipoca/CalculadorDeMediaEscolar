//pode fazer uma lista ao invez de varias variaveis mas eu esqueci disso na hora
//talvez dê para diminuir a quantidade de variaveis
var inpAdBio = document.getElementById('adBio')
var adBio = Number(inpAdBio.value)
var inpAdFis = document.getElementById('adFis')
var adFis = Number(inpAdFis.value)
var inpAdQui = document.getElementById('adQui')
var adQui = Number(inpAdQui.value)

var inpAtv1Artes = document.getElementById('atv1Artes')
var Atv1Artes = Number(inpAtv1Artes.value)
var inpAtv2Artes = document.getElementById('atv2Artes')
var Atv2Artes = Number(inpAtv2Artes.value)

var inpProjetoLeitura1 = document.getElementById('projetoLeitura1')
var projetoLeitura1 = Number(inpProjetoLeitura1.value)
var inpAtv1Red = document.getElementById('atv1Red')
var Atv1Red = Number(inpAtv1Red.value)
var inpAtv2Red = document.getElementById('atv2Red')
var Atv2Red = Number(inpAtv2Red.value)

var inpAdPort = document.getElementById('adPort')
var adPort = Number(inpAdPort.value)
var inpAp1Port = document.getElementById('ap1Port')
var ap1Port = Number(inpAp1Port.value)
var inpAp2Port = document.getElementById('ap2Port')
var ap2Port = Number(inpAp2Port.value)
var inpAp3Port = document.getElementById('ap3Port')
var ap3Port = Number(inpAp3Port.value)
var inpAvEnemPort = document.getElementById('avEnemPort')
var avEnemPort = Number(inpAvEnemPort.value)
var inpFolhaAzPort = document.getElementById('folhaAzPort')
var folhaAzPort = Number(inpFolhaAzPort.value)
var inpProjetoLeitura2 = document.getElementById('projetoLeitura2')
var projetoLeitura2 = Number(inpProjetoLeitura2.value)

var inpAdMat = document.getElementById('adMat')
var adMat = Number(inpAdMat.value)
var inpAp1Mat = document.getElementById('ap1Mat')
var ap1Mat = Number(inpAp1Mat.value)
var inpAp2Mat = document.getElementById('ap2Mat')
var ap2Mat = Number(inpAp2Mat.value)
var inpAp3Mat = document.getElementById('ap3Mat')
var ap3Mat = Number(inpAp3Mat.value)
var inpAvEnemMat = document.getElementById('avEnemMat')
var avEnemMat = Number(inpAvEnemMat.value)
var inpFolhaAzMat = document.getElementById('folhaAzMat')
var folhaAzMat = Number(inpFolhaAzMat.value)

var inpAdHist = document.getElementById('adHist')
var adHist = Number(inpAdHist.value)
var inpAp1Hist = document.getElementById('ap1Hist')
var ap1Hist = Number(inpAp1Hist.value)
var inpAp2Hist = document.getElementById('ap2Hist')
var ap2Hist = Number(inpAp2Hist.value)
var inpAp3Hist = document.getElementById('ap3Hist')
var ap3Hist = Number(inpAp3Hist.value)
var inpAvEnemHist = document.getElementById('avEnemHist')
var avEnemHist = Number(inpAvEnemHist.value)
var inpFolhaAzHist = document.getElementById('folhaAzHist')
var folhaAzHist = Number(inpFolhaAzHist.value)

var inpAdGeo = document.getElementById('adGeo')
var adGeo = Number(inpAdGeo.value)
var inpAp1Geo = document.getElementById('ap1Geo')
var ap1Geo = Number(inpAp1Geo.value)
var inpAp2Geo = document.getElementById('ap2Geo')
var ap2Geo = Number(inpAp2Geo.value)
var inpAp3Geo = document.getElementById('ap3Geo')
var ap3Geo = Number(inpAp3Geo.value)
var inpAvEnemGeo = document.getElementById('avEnemGeo')
var avEnemGeo = Number(inpAvEnemGeo.value)
var inpFolhaAzGeo = document.getElementById('folhaAzGeo')
var folhaAzGeo = Number(inpFolhaAzGeo.value)

var inpAp1Cie = document.getElementById('ap1Cie')
var ap1Cie = Number(inpAp1Cie.value)
var inpAp2Cie = document.getElementById('ap2Cie')
var ap2Cie = Number(inpAp2Cie.value)
var inpAp3Cie = document.getElementById('ap3Cie')
var ap3Cie = Number(inpAp3Cie.value)
var inpAvEnemCie = document.getElementById('avEnemCie')
var avEnemCie = Number(inpAvEnemCie.value)
var inpFolhaAzCie = document.getElementById('folhaAzCie')
var folhaAzCie = Number(inpFolhaAzCie.value)

var inpNotaArtes = document.getElementById('notaArtes')
var inpNotaRed = document.getElementById('notaRed')
var inpNotaPort = document.getElementById('notaPort')
var inpNotaMat = document.getElementById('notaMat')
var inpNotaHist = document.getElementById('notaHist')
var inpNotaGeo = document.getElementById('notaGeo')
var inpNotaCie = document.getElementById('notaCie')
function confirmar() {
    inpAdBio = document.getElementById('adBio')
    adBio = Number(inpAdBio.value)
    inpAdFis = document.getElementById('adFis')
    adFis = Number(inpAdFis.value)
    inpAdQui = document.getElementById('adQui')
    adQui = Number(inpAdQui.value)

    inpAtv1Artes = document.getElementById('atv1Artes')
    Atv1Artes = Number(inpAtv1Artes.value)
    inpAtv2Artes = document.getElementById('atv2Artes')
    Atv2Artes = Number(inpAtv2Artes.value)

    inpProjetoLeitura1 = document.getElementById('projetoLeitura1')
    projetoLeitura1 = Number(inpProjetoLeitura1.value)
    inpAtv1Red = document.getElementById('atv1Red')
    Atv1Red = Number(inpAtv1Red.value)
    inpAtv2Red = document.getElementById('atv2Red')
    Atv2Red = Number(inpAtv2Red.value)

    inpAdPort = document.getElementById('adPort')
    adPort = Number(inpAdPort.value)
    inpAp1Port = document.getElementById('ap1Port')
    ap1Port = Number(inpAp1Port.value)
    inpAp2Port = document.getElementById('ap2Port')
    ap2Port = Number(inpAp2Port.value)
    inpAp3Port = document.getElementById('ap3Port')
    ap3Port = Number(inpAp3Port.value)
    inpAvEnemPort = document.getElementById('avEnemPort')
    avEnemPort = Number(inpAvEnemPort.value)
    inpFolhaAzPort = document.getElementById('folhaAzPort')
    folhaAzPort = Number(inpFolhaAzPort.value)
    inpProjetoLeitura2 = document.getElementById('projetoLeitura2')
    projetoLeitura2 = Number(inpProjetoLeitura2.value)

    inpAdMat = document.getElementById('adMat')
    adMat = Number(inpAdMat.value)
    inpAp1Mat = document.getElementById('ap1Mat')
    ap1Mat = Number(inpAp1Mat.value)
    inpAp2Mat = document.getElementById('ap2Mat')
    ap2Mat = Number(inpAp2Mat.value)
    inpAp3Mat = document.getElementById('ap3Mat')
    ap3Mat = Number(inpAp3Mat.value)
    inpAvEnemMat = document.getElementById('avEnemMat')
    avEnemMat = Number(inpAvEnemMat.value)
    inpFolhaAzMat = document.getElementById('folhaAzMat')
    folhaAzMat = Number(inpFolhaAzMat.value)

    inpAdHist = document.getElementById('adHist')
    adHist = Number(inpAdHist.value)
    inpAp1Hist = document.getElementById('ap1Hist')
    ap1Hist = Number(inpAp1Hist.value)
    inpAp2Hist = document.getElementById('ap2Hist')
    ap2Hist = Number(inpAp2Hist.value)
    inpAp3Hist = document.getElementById('ap3Hist')
    ap3Hist = Number(inpAp3Hist.value)
    inpAvEnemHist = document.getElementById('avEnemHist')
    avEnemHist = Number(inpAvEnemHist.value)
    inpFolhaAzHist = document.getElementById('folhaAzHist')
    folhaAzHist = Number(inpFolhaAzHist.value)

    inpAdGeo = document.getElementById('adGeo')
    adGeo = Number(inpAdGeo.value)
    inpAp1Geo = document.getElementById('ap1Geo')
    ap1Geo = Number(inpAp1Geo.value)
    inpAp2Geo = document.getElementById('ap2Geo')
    ap2Geo = Number(inpAp2Geo.value)
    inpAp3Geo = document.getElementById('ap3Geo')
    ap3Geo = Number(inpAp3Geo.value)
    inpAvEnemGeo = document.getElementById('avEnemGeo')
    avEnemGeo = Number(inpAvEnemGeo.value)
    inpFolhaAzGeo = document.getElementById('folhaAzGeo')
    folhaAzGeo = Number(inpFolhaAzGeo.value)

    inpAp1Cie = document.getElementById('ap1Cie')
    ap1Cie = Number(inpAp1Cie.value)
    inpAp2Cie = document.getElementById('ap2Cie')
    ap2Cie = Number(inpAp2Cie.value)
    inpAp3Cie = document.getElementById('ap3Cie')
    ap3Cie = Number(inpAp3Cie.value)
    inpAvEnemCie = document.getElementById('avEnemCie')
    avEnemCie = Number(inpAvEnemCie.value)
    inpFolhaAzCie = document.getElementById('folhaAzCie')
    folhaAzCie = Number(inpFolhaAzCie.value)

    inpNotaArtes = document.getElementById('notaArtes')
    inpNotaRed = document.getElementById('notaRed')
    inpNotaPort = document.getElementById('notaPort')
    inpNotaMat = document.getElementById('notaMat')
    inpNotaHist = document.getElementById('notaHist')
    inpNotaGeo = document.getElementById('notaGeo')
    inpNotaCie = document.getElementById('notaCie')
}
function calcular4() {
    confirmar()
    var notaArtes = Atv1Artes + Atv2Artes
    var notaRed = ((Atv1Red * 5) + (Atv2Red * 4) + (projetoLeitura1 * 1)) / 10
    var notaPort = ((adPort * 4) + (projetoLeitura2 * 1) + (((ap1Port + ap2Port + ap3Port) / 1.2) * 3) + (avEnemPort * 1) + (folhaAzPort*1)) / 10
    var notaMat = ((adMat * 5) + (((ap1Mat + ap2Mat + ap3Mat) / 1.2) * 3) + (avEnemMat * 1) + (folhaAzMat*1)) / 10
    var notaHist = ((adHist * 5) + (((ap1Hist + ap2Hist + ap3Hist) / 1.2) * 3) + (avEnemHist * 1) + (folhaAzHist*1)) / 10
    var notaGeo = ((adGeo * 5) + (((ap1Geo + ap2Geo + ap3Geo) / 1.2) * 3) + (avEnemGeo * 1) + (folhaAzGeo*1)) / 10
    var notaCie = (((adBio + adFis + adQui) / 3 * 5) + (((ap1Cie + ap2Cie + ap3Cie) / 1.2) * 3) + (avEnemCie * 1) + (folhaAzCie*1)) / 10

    //artes
    if (notaArtes >= 6){
        inpNotaArtes.innerHTML = `<span style="color: green;">${notaArtes.toFixed(2)}</span>`
    } else{
        inpNotaArtes.innerHTML = `<span style="color: red;">${notaArtes.toFixed(2)}</span>`
    }

    //redação
    if (notaRed >= 6){
        inpNotaRed.innerHTML = `<span style="color: green;">${notaRed.toFixed(2)}</span>`
    } else{
        inpNotaRed.innerHTML = `<span style="color: red;">${notaRed.toFixed(2)}</span>`
    }
    //portugues
    if (notaPort >= 6){
        inpNotaPort.innerHTML = `<span style="color: green;">${notaPort.toFixed(2)}</span>`
    } else{
        inpNotaPort.innerHTML = `<span style="color: red;">${notaPort.toFixed(2)}</span>`
    }
    //matematica
    if (notaMat >= 6){
        inpNotaMat.innerHTML = `<span style="color: green;">${notaMat.toFixed(2)}</span>`
    } else{
        inpNotaMat.innerHTML = `<span style="color: red;">${notaMat.toFixed(2)}</span>`
    }
    //historia
    if (notaHist >= 6){
        inpNotaHist.innerHTML = `<span style="color: green;">${notaHist.toFixed(2)}</span>`
    } else{
        inpNotaHist.innerHTML = `<span style="color: red;">${notaHist.toFixed(2)}</span>`
    }
    //geografia
    if (notaGeo >= 6){
        inpNotaGeo.innerHTML = `<span style="color: green;">${notaGeo.toFixed(2)}</span>`
    } else{
        inpNotaGeo.innerHTML = `<span style="color: red;">${notaGeo.toFixed(2)}</span>`
    }
    //ciencias
    if (notaCie >= 6){
        inpNotaCie.innerHTML = `<span style="color: green;">${notaCie.toFixed(2)}</span>`
    } else{
        inpNotaCie.innerHTML = `<span style="color: red;">${notaCie.toFixed(2)}</span>`
    }
}