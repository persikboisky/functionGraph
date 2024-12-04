//выставляем размер canvas
const sizeCanvas = [800, 800];

//привязываем id цикла A
const sAid = document.getElementById("sA");//startA
const fAid = document.getElementById("fA");//finishA
const pAid = document.getElementById("pA");//plusA

//привязываем id цикла B
const sBid = document.getElementById("sB");//startB
const fBid = document.getElementById("fB");//finishB
const pBid = document.getElementById("pB");//plusB

//привязываем id цикла C
const sCid = document.getElementById("sC");//startC
const fCid = document.getElementById("fC");//finishC
const pCid = document.getElementById("pC");//plusC

//привязываем id цикла A
const sDid = document.getElementById("sD");//startD
const fDid = document.getElementById("fD");//finishD
const pDid = document.getElementById("pD");//plusD

//привязываем id фунции A
const aColorid = document.getElementById("aColor");
const aXid = document.getElementById("aX");
const aYid = document.getElementById("aY");
const aPixelSizeId = document.getElementById("aSizePixel");

//привязываем id фунции B
const bColorid = document.getElementById("bColor");
const bXid = document.getElementById("bX");
const bYid = document.getElementById("bY");
const bPixelSizeId = document.getElementById("bSizePixel");

//привязываем id фунции C
const cColorid = document.getElementById("cColor");
const cXid = document.getElementById("cX");
const cYid = document.getElementById("cY");
const cPixelSizeId = document.getElementById("cSizePixel");

//привязываем id фунции D
const dColorid = document.getElementById("dColor");
const dXid = document.getElementById("dX");
const dYid = document.getElementById("dY");
const dPixelSizeId = document.getElementById("dSizePixel");

//начальная настройка размера клетки
const aS = document.getElementById('aSlider');
aS.value = 20;
const bS = document.getElementById('bSlider');
bS.value = 20;
const cS = document.getElementById('cSlider');
cS.value = 20;
const dS = document.getElementById('dSlider');
dS.value = 20;

//настраиваем canvas
const imgID = document.getElementById('img');
const canvasID = document.getElementById('display');
canvasID.width = sizeCanvas[0];
canvasID.height = sizeCanvas[1];
const context = canvasID.getContext('2d');

aColorid.value = "red";
bColorid.value = "green";
cColorid.value = "blue";
dColorid.value = "black";

sAid.value = "-100";
sBid.value = "-100";
sCid.value = "-100";
sDid.value = "-100";

fAid.value = "100";
fBid.value = "100";
fCid.value = "100";
fDid.value = "100";

pAid.value = "0.01";
pBid.value = "0.01";
pCid.value = "0.01";
pDid.value = "0.01";

const Rect = (x, y, width, height, color) => {
    context.fillStyle = color;
    context.fillRect(x - width / 2, y - height / 2, width, height);
}

//рисуем картику
const img = (xi, yi, widthI, heightI, x, y, width, height) => {
    context.drawImage(imgID, xi, yi, widthI, heightI, x, y, width, height);
}

let sA, fA, pA;
let sB, fB, pB;
let sC, fC, pC;
let sD, fD, pD;

const graphFunctionA = (a) => {
    Rect(
        eval(aXid.value) * (21 - eval(document.getElementById('aSlider').value)) + sizeCanvas[0] / 2,
        eval(aYid.value) * (21 - eval(document.getElementById('aSlider').value)) * -1 + sizeCanvas[0] / 2,
        eval(aPixelSizeId.value),
        eval(aPixelSizeId.value),
        aColorid.value
    );
}

const graphFunctionB = (b) => {
    Rect(
        eval(bXid.value) * (21 - eval(document.getElementById('bSlider').value)) + sizeCanvas[0] / 2,
        eval(bYid.value) * (21 - eval(document.getElementById('bSlider').value)) * -1 + sizeCanvas[0] / 2,
        eval(bPixelSizeId.value),
        eval(bPixelSizeId.value),
        bColorid.value
    );
}

const graphFunctionC = (c) => {
    Rect(
        eval(cXid.value) * (21 - eval(document.getElementById('cSlider').value)) + sizeCanvas[0] / 2,
        eval(cYid.value) * (21 - eval(document.getElementById('cSlider').value)) * -1 + sizeCanvas[0] / 2,
        eval(cPixelSizeId.value),
        eval(cPixelSizeId.value),
        cColorid.value
    );
}

const graphFunctionD = (d) => {
    Rect(
        eval(dXid.value) * (21 - eval(document.getElementById('dSlider').value)) + sizeCanvas[0] / 2, 
        eval(dYid.value) * (21 - eval(document.getElementById('dSlider').value)) * -1 + sizeCanvas[0] / 2,
        eval(dPixelSizeId.value),
        eval(dPixelSizeId.value),
        dColorid.value
    );
}

img(0, 0, 700, 700, -1, -1, sizeCanvas[0] + 10, canvasID[1] + 12);

const update = () => {

    //настраиваем размер точки
    document.getElementById("aSizePixelLabel").innerHTML = "Размер точки: " + aPixelSizeId.value;
    document.getElementById("bSizePixelLabel").innerHTML = "Размер точки: " + bPixelSizeId.value;
    document.getElementById("cSizePixelLabel").innerHTML = "Размер точки: " + cPixelSizeId.value;
    document.getElementById("dSizePixelLabel").innerHTML = "Размер точки: " + dPixelSizeId.value;

    //настраиваем размер сетки
    document.getElementById("aSliderInput").innerHTML = "Размер одной клетки: " + document.getElementById('aSlider').value;
    document.getElementById("bSliderInput").innerHTML = "Размер одной клетки: " + document.getElementById('bSlider').value;
    document.getElementById("cSliderInput").innerHTML = "Размер одной клетки: " + document.getElementById('cSlider').value;
    document.getElementById("dSliderInput").innerHTML = "Размер одной клетки: " + document.getElementById('dSlider').value;

    //фунция для рисования четырёхугольников

    clearCanvas();

    //привязываем параметры цыкла A
    sA = eval(sAid.value);
    fA = eval(fAid.value);
    pA = eval(pAid.value);
    let a = sA;

    if (sA == undefined || fA == undefined || pA == undefined) {
        Rect(
            (eval(aXid.value) + sizeCanvas[0] / 2) / eval(document.getElementById('aSlider').value),
            (eval(aYid.value) * -1 + sizeCanvas[0] / 2) / eval(document.getElementById('aSlider').value),
            eval(aPixelSizeId.value),
            eval(aPixelSizeId.value),
            aColorid.value
        );
    } else {

        if (pA != 0) {
            while (a < fA) {
                graphFunctionA(a);
                a += pA;
            }
        } else;
    }


    //привязываем параметры цыкла B
    sB = eval(sBid.value);
    fB = eval(fBid.value);
    pB = eval(pBid.value);
    let b = sB;

    if (sB == undefined || fB == undefined || pB == undefined) {
        Rect(
            eval(bXid.value) + sizeCanvas[0] / 2,
            eval(bYid.value) * -1 + sizeCanvas[0] / 2,
            eval(bPixelSizeId.value),
            eval(bPixelSizeId.value),
            bColorid.value
        );
    } else {

        if (pB != 0) {
            while (b < fB) {
                graphFunctionB(b);
                b += pB;
            }
        }
    }

    //привязываем параметры цыкла C
    sC = eval(sCid.value);
    fC = eval(fCid.value);
    pC = eval(pCid.value);
    let c = sC;

    if (sC == undefined || fC == undefined || pC == undefined) {
        Rect(
            eval(cXid.value) + sizeCanvas[0] / 2,
            eval(cYid.value) * -1 + sizeCanvas[0] / 2,
            eval(cPixelSizeId.value),
            eval(cPixelSizeId.value),
            cColorid.value
        );
    } else {

        if (pC != 0) {
            while (c < fC) {
                graphFunctionC(c);
                c += pC;
            }
        }
    }

    //привязываем параметры цыкла D
    sD = eval(sDid.value);
    fD = eval(fDid.value);
    pD = eval(pDid.value);
    let d = sD;

    if (sD == undefined || fD == undefined || pD == undefined) {
        Rect(
            eval(dXid.value) + sizeCanvas[0] / 2,
            eval(dYid.value) * -1 + sizeCanvas[0] / 2,
            eval(dPixelSizeId.value),
            eval(dPixelSizeId.value),
            dColorid.value
        );
    } else {

        if (pD != 0) {
            while (d < fD) {
                graphFunctionD(d);
                d += pD;
            }
        } else;
    }
}

setInterval(update, 1000 / 10);