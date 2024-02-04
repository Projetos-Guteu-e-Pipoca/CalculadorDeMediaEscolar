//BE CAREFULL! SHITTY CODE AHEAD:
//ATTENTION: this code was made when I was starting as a programmer, so the codes from other school years are way better

//DANGER ZONE:

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

var inpPpArtes = document.getElementById('ppArtes')
var inpPpRed = document.getElementById('ppRed')
var inpPpPort = document.getElementById('ppPort')
var inpPpMat = document.getElementById('ppMat')
var inpPpHist = document.getElementById('ppHist')
var inpPpGeo = document.getElementById('ppGeo')
var inpPpCie = document.getElementById('ppCie')

var helperText4U = document.getElementById('helper-text4U')

/* isso faz exatamento a função min e max
const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

console.log(clamp(2000, 1, 5))
console.log(clamp(0, 1, 5))*/

function max(){
    if (adBio > 10){
        adBio = 10
        inpAdBio.value = 10
        helperText4U.innerText = "[!] a AD de biologia vale entre 0 e 10"
    }
    if (adFis > 10){
        adFis = 10
        inpAdFis.value = 10
        helperText4U.innerText = "[!] a AD de fisica vale entre 0 e 10"
    }
    if (adQui > 10){
        adQui = 10
        inpAdQui.value = 10
        helperText4U.innerText = "[!] a AD de quimica vale entre 0 e 10"
    }

    if (Atv1Artes > 5){
        Atv1Artes = 5
        inpAtv1Artes.value = 5
        helperText4U.innerText = "[!] a atv1 de artes vale entre 0 e 5"
    }
    if (Atv2Artes > 5){
        Atv2Artes = 5
        inpAtv2Artes.value = 5
        helperText4U.innerText = "[!] a atv2 de artes vale entre 0 e 5"
    }

    if (projetoLeitura1 > 10){
        projetoLeitura1 = 10
        inpProjetoLeitura1.value = 10
        helperText4U.innerText = "[!] o projeto de leitura vale entre 0 e 10"
    }

    if (Atv1Red > 10){
        Atv1Red = 10
        inpAtv1Red.value = 10
        helperText4U.innerText = "[!] a atv1 de redação vale entre 0 e 10"
    }
    if (Atv2Red > 10){
        Atv2Red = 10
        inpAtv2Red.value = 10
        helperText4U.innerText = "[!] a atv2 de redação vale entre 0 e 10"
    }

    if (adPort > 10){
        adPort = 10
        inpAdPort.value = 10
        helperText4U.innerText = "[!] a AD de portugues vale entre 0 e 10"
    }
    if (ap1Port > 4){
        ap1Port = 4
        inpAp1Port.value = 4
        helperText4U.innerText = "[!] a ap1 de portugues vale entre 0 e 4"
    }
    if (ap2Port > 4){
        ap2Port = 4
        inpAp2Port.value = 4
        helperText4U.innerText = "[!] a ap2 de portugues vale entre 0 e 4"
    }
    if (ap3Port > 4){
        ap3Port = 4
        inpAp3Port.value = 4
        helperText4U.innerText = "[!] a ap3 de portugues vale entre 0 e 4"
    }
    if (avEnemPort > 10){
        avEnemPort = 10
        inpAvEnemPort.value = 10
        helperText4U.innerText = "[!] a avaliação enem de portugues vale entre 0 e 10"
    }
    if (folhaAzPort > 10){
        folhaAzPort = 10
        inpFolhaAzPort.value = 10
        helperText4U.innerText = "[!] a folha az de portugues vale entre 0 e 10"
    }
    if (projetoLeitura2 > 10){
        projetoLeitura2 = 10
        inpProjetoLeitura2.value = 10
        helperText4U.innerText = "[!] o projeto de leitura vale entre 0 e 10"
    }

    if (adMat > 10){
        adMat = 10
        inpAdMat.value = 10
        helperText4U.innerText = "[!] a AD de matematica vale entre 0 e 10"
    }
    if (ap1Mat > 4){
        ap1Mat = 4
        inpAp1Mat.value = 4
        helperText4U.innerText = "[!] a ap1 de matematica vale entre 0 e 4"
    }
    if (ap2Mat > 4){
        ap2Mat = 4
        inpAp2Mat.value = 4
        helperText4U.innerText = "[!] a ap2 de matematica vale entre 0 e 4"
    }
    if (ap3Mat > 4){
        ap3Mat = 4
        inpAp3Mat.value = 4
        helperText4U.innerText = "[!] a ap3 de matematica vale entre 0 e 4"
    }
    if (avEnemMat > 10){
        avEnemMat = 10
        inpAvEnemMat.value = 10
        helperText4U.innerText = "[!] a avaliação enem de matematica vale entre 0 e 10"

    }
    if (folhaAzMat > 10){
        folhaAzMat = 10
        inpFolhaAzMat.value = 10
        helperText4U.innerText = "[!] a folha az de matematica vale entre 0 e 10"
    }

    if (adHist > 10){
        adHist = 10
        inpAdHist.value = 10
        helperText4U.innerText = "[!] a AD de historia vale entre 0 e 10"
    }
    if (ap1Hist > 4){
        ap1Hist = 4
        inpAp1Hist.value = 4
        helperText4U.innerText = "[!] a ap1 de historia vale entre 0 e 4"
    }
    if (ap2Hist > 4){
        ap2Hist = 4
        inpAp2Hist.value = 4
        helperText4U.innerText = "[!] a ap2 de historia vale entre 0 e 4"
    }
    if (ap3Hist > 4){
        ap3Hist = 4
        inpAp3Hist.value = 4
        helperText4U.innerText = "[!] a ap3 de historia vale entre 0 e 4"
    }
    if (avEnemHist > 10){
        avEnemHist = 10
        inpAvEnemHist.value = 10
        helperText4U.innerText = "[!] a avaliação enem de historia vale entre 0 e 10"
    }
    if (folhaAzHist > 10){
        folhaAzHist = 10
        inpFolhaAzHist.value = 10
        helperText4U.innerText = "[!] a folha az de historia vale entre 0 e 10"
    }

    if (adGeo > 10){
        adGeo = 10
        inpAdGeo.value = 10
        helperText4U.innerText = "[!] a AD de geografia vale entre 0 e 10"
    }
    if (ap1Geo > 4){
        ap1Geo = 4
        inpAp1Geo.value = 4
        helperText4U.innerText = "[!] a ap1 de geografia vale entre 0 e 4"
    }
    if (ap2Geo > 4){
        ap2Geo = 4
        inpAp2Geo.value = 4
        helperText4U.innerText = "[!] a ap2 de geografia vale entre 0 e 4"
    }
    if (ap3Geo > 4){
        ap3Geo = 4
        inpAp3Geo.value = 4
        helperText4U.innerText = "[!] a ap3 de geografia vale entre 0 e 4"
    }
    if (avEnemGeo > 10){
        avEnemGeo = 10
        inpAvEnemGeo.value = 10
        helperText4U.innerText = "[!] a avaliação enem de geografia vale entre 0 e 10"
    }
    if (folhaAzGeo > 10){
        folhaAzGeo = 10
        inpFolhaAzGeo.value = 10
        helperText4U.innerText = "[!] a folha az de geografia vale entre 0 e 10"
    } 

    if (ap1Cie > 4){
        ap1Cie = 4
        inpAp1Cie.value = 4
        helperText4U.innerText = "[!] a ap1 de ciencias vale entre 0 e 4"
    }
    if (ap2Cie > 4){
        ap2Cie = 4
        inpAp2Cie.value = 4
        helperText4U.innerText = "[!] a ap2 de ciencias vale entre 0 e 4"
    }
    if (ap3Cie > 4){
        ap3Cie = 4
        inpAp3Cie.value = 4
        helperText4U.innerText = "[!] a ap3 de ciencias vale entre 0 e 4"
    }
    if (avEnemCie > 10){
        avEnemCie = 10
        inpAvEnemCie.value = 10
        helperText4U.innerText = "[!] a avaliação enem de ciencias vale entre 0 e 10"
    }
    if (folhaAzCie > 10){
        folhaAzCie = 10
        inpFolhaAzCie.value = 10
        helperText4U.innerText = "[!] a folha az de ciencias vale entre 0 e 10"
    } 
}
function min(){
    if (adBio < 0){
        adBio = 0
        inpAdBio.value = 0
        helperText4U.innerText = "[!] a AD de biologia vale entre 0 e 10"
    }
    if (adFis < 0){
        adFis = 0
        inpAdFis.value = 0
        helperText4U.innerText = "[!] a AD de fisica vale entre 0 e 10"
    }
    if (adQui < 0){
        adQui = 0
        inpAdQui.value = 0
        helperText4U.innerText = "[!] a AD de quimica vale entre 0 e 10"
    }

    if (Atv1Artes < 0){
        Atv1Artes = 0
        inpAtv1Artes.value = 0
        helperText4U.innerText = "[!] a atv1 de artes vale entre 0 e 5"
    }
    if (Atv2Artes < 0){
        Atv2Artes = 0
        inpAtv2Artes.value = 0
        helperText4U.innerText = "[!] a atv2 de artes vale entre 0 e 5"
    }

    if (projetoLeitura1 < 0){
        projetoLeitura1 = 0
        inpProjetoLeitura1.value = 0
        helperText4U.innerText = "[!] o projeto de leitura vale entre 0 e 10"
    }

    if (Atv1Red < 0){
        Atv1Red = 0
        inpAtv1Red.value = 0
        helperText4U.innerText = "[!] a atv1 de redação vale entre 0 e 5"
    }
    if (Atv2Red < 0){
        Atv2Red = 0
        inpAtv2Red.value = 0
        helperText4U.innerText = "[!] a atv2 de redação vale entre 0 e 5"
    }

    if (adPort < 0){
        adPort = 0
        inpAdPort.value = 0
        helperText4U.innerText = "[!] a AD de portugues vale entre 0 e 10"
    }
    if (ap1Port < 0){
        ap1Port = 0
        inpAp1Port.value = 0
        helperText4U.innerText = "[!] a ap1 de portugues vale entre 0 e 4"
    }
    if (ap2Port < 0){
        ap2Port = 0
        inpAp2Port.value = 0
        helperText4U.innerText = "[!] a ap2 de portugues vale entre 0 e 4"
    }
    if (ap3Port < 0){
        ap3Port = 0
        inpAp3Port.value = 0
        helperText4U.innerText = "[!] a ap3 de portugues vale entre 0 e 4"
    }
    if (avEnemPort < 0){
        avEnemPort = 0
        inpAvEnemPort.value = 0
        helperText4U.innerText = "[!] a avaliação enem de portugues vale entre 0 e 10"
    }
    if (folhaAzPort < 0){
        folhaAzPort = 0
        inpFolhaAzPort.value = 0
        helperText4U.innerText = "[!] a folha az de portugues vale entre 0 e 10"
    }
    if (projetoLeitura2 < 0){
        projetoLeitura2 = 0
        inpProjetoLeitura2.value = 0
        helperText4U.innerText = "[!] o projeto de leitura vale entre 0 e 10"
    }

    if (adMat < 0){
        adMat = 0
        inpAdMat.value = 0
        helperText4U.innerText = "[!] a AD de matematica vale entre 0 e 10"
    }
    if (ap1Mat < 0){
        ap1Mat = 0
        inpAp1Mat.value = 0
        helperText4U.innerText = "[!] a ap1 de matematica vale entre 0 e 4"
    }
    if (ap2Mat < 0){
        ap2Mat = 0
        inpAp2Mat.value = 0
        helperText4U.innerText = "[!] a ap2 de matematica vale entre 0 e 4"
    }
    if (ap3Mat < 0){
        ap3Mat = 0
        inpAp3Mat.value = 0
        helperText4U.innerText = "[!] a ap3 de matematica vale entre 0 e 4"
    }
    if (avEnemMat < 0){
        avEnemMat = 0
        inpAvEnemMat.value = 0
        helperText4U.innerText = "[!] a avaliação enem de matematica vale entre 0 e 10"
    }
    if (folhaAzMat < 0){
        folhaAzMat = 0
        inpFolhaAzMat.value = 0
        helperText4U.innerText = "[!] a folha az de matematica vale entre 0 e 10"
    }
    
    if (adHist < 0){
        adHist = 0
        inpAdHist.value = 0
        helperText4U.innerText = "[!] a AD de historia vale entre 0 e 10"
    }
    if (ap1Hist < 0){
        ap1Hist = 0
        inpAp1Hist.value = 0
        helperText4U.innerText = "[!] a ap1 de historia vale entre 0 e 4"
    }
    if (ap2Hist < 0){
        ap2Hist = 0
        inpAp2Hist.value = 0
        helperText4U.innerText = "[!] a ap2 de historia vale entre 0 e 4"
    }
    if (ap3Hist < 0){
        ap3Hist = 0
        inpAp3Hist.value = 0
        helperText4U.innerText = "[!] a ap3 de historia vale entre 0 e 4"
    }
    if (avEnemHist < 0){
        avEnemHist = 0
        inpAvEnemHist.value = 0
        helperText4U.innerText = "[!] a avaliação enem de historia vale entre 0 e 10"
    }
    if (folhaAzHist < 0){
        folhaAzHist = 0
        inpFolhaAzHist.value = 0
        helperText4U.innerText = "[!] a folha az de historia vale entre 0 e 10"
    }
    
    if (adGeo < 0){
        adGeo = 0
        inpAdGeo.value = 0
        helperText4U.innerText = "[!] a AD de geografia vale entre 0 e 10"
    }
    if (ap1Geo < 0){
        ap1Geo = 0
        inpAp1Geo.value = 0
        helperText4U.innerText = "[!] a ap1 de ciencias vale entre 0 e 4"
    }
    if (ap2Geo < 0){
        ap2Geo = 0
        inpAp2Geo.value = 0
        helperText4U.innerText = "[!] a ap2 de ciencias vale entre 0 e 4"
    }
    if (ap3Geo < 0){
        ap3Geo = 0
        inpAp3Geo.value = 0
        helperText4U.innerText = "[!] a ap3 de ciencias vale entre 0 e 4"
    }
    if (avEnemGeo < 0){
        avEnemGeo = 0
        inpAvEnemGeo.value = 0
        helperText4U.innerText = "[!] a avaliação enem de geografia vale entre 0 e 10"
    }
    if (folhaAzGeo < 0){
        folhaAzGeo = 0
        inpFolhaAzGeo.value = 0
        helperText4U.innerText = "[!] a folha az de geografia vale entre 0 e 10"
    } 
    
    if (ap1Cie < 0){
        ap1Cie = 0
        inpAp1Cie.value = 0
        helperText4U.innerText = "[!] a ap1 de ciencias vale entre 0 e 4"
    }
    if (ap2Cie < 0){
        ap2Cie = 0
        inpAp2Cie.value = 0
        helperText4U.innerText = "[!] a ap2 de ciencias vale entre 0 e 4"
    }
    if (ap3Cie < 0){
        ap3Cie = 0
        inpAp3Cie.value = 0
        helperText4U.innerText = "[!] a ap3 de ciencias vale entre 0 e 4"
    }
    if (avEnemCie < 0){
        avEnemCie = 0
        inpAvEnemCie.value = 0
        helperText4U.innerText = "[!] a avaliação enem de ciencias vale entre 0 e 10"
    }
    if (folhaAzCie < 0){
        folhaAzCie = 0
        inpFolhaAzCie.value = 0
        helperText4U.innerText = "[!] a folha az de ciencias vale entre 0 e 10"
    } 
}//This code is so shitty that I want to kil myself after reading it and I feel bad for the person to correct it, if there is a bug (from the devs)

function confirmar() {
    inpAdBio = document.getElementById('adBio');
    adBio = Number(inpAdBio.value);
    inpAdFis = document.getElementById('adFis');
    adFis = Number(inpAdFis.value);
    inpAdQui = document.getElementById('adQui');
    adQui = Number(inpAdQui.value);

    inpAtv1Artes = document.getElementById('atv1Artes');
    Atv1Artes = Number(inpAtv1Artes.value);
    inpAtv2Artes = document.getElementById('atv2Artes');
    Atv2Artes = Number(inpAtv2Artes.value);

    inpProjetoLeitura1 = document.getElementById('projetoLeitura1');
    projetoLeitura1 = Number(inpProjetoLeitura1.value);
    inpAtv1Red = document.getElementById('atv1Red');
    Atv1Red = Number(inpAtv1Red.value);
    inpAtv2Red = document.getElementById('atv2Red');
    Atv2Red = Number(inpAtv2Red.value);

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
    max();
    min();
}

//atualizar o input automaticamente
const inputNota4U = document.getElementsByClassName('inputNota4U');
for (var i=0; i<inputNota4U.length;i++){
    inputNota4U[i].addEventListener("change", () => {
        confirmar();
    });
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

    inpPpArtes.innerText = notaArtes * 3
    inpPpRed.innerText = notaRed * 3
    inpPpPort.innerText = notaPort * 3
    inpPpMat.innerText = notaMat * 3
    inpPpHist.innerText = notaHist * 3
    inpPpGeo.innerText = notaHist * 3
    inpPpCie.innerText = notaCie * 3

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
    helperText4U.innerText = ""
}