

const clearCycle = (id) => {
    if (id == 'a') {
        sAid.value = "";
        fAid.value = "";
        pAid.value = "";
    } else if (id == 'b') {
        sBid.value = "";
        fBid.value = "";
        pBid.value = "";
    } else if (id == 'c') {
        sCid.value = "";
        fCid.value = "";
        pCid.value = "";
    } else if (id == 'd') {
        sDid.value = "";
        fDid.value = "";
        pDid.value = "";
    } else;
}

const clearFun = (id) => {
    if (id == 'a') {
        aXid.value = "";
        aYid.value = "";
        aPixelSizeId.value = "0";
    } else if (id == 'b') {
        bXid.value = "";
        bYid.value = "";
        bPixelSizeId.value = "0";
    } else if (id == 'c') {
        cXid.value = "";
        cYid.value = "";
        cPixelSizeId.value = "0";
    } else if (id == 'd') {
        dXid.value = "";
        dYid.value = "";
        dPixelSizeId.value = "0";
    }
}

const clearCanvas = () => {
    Rect(0, 0, canvasID.width, canvasID.height, 'white');
    img(0, 0, 700, 700, -1, -1, sizeCanvas[0] + 10, sizeCanvas[1] + 13);
}