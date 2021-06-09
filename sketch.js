var a;
var b;
var c;
var d;
var e;
var f;
var g;
var j;
var N;
var img;
var xL;
var xR;
var box;
var cyl;
var sph;
var con;
var xB;
var xCY;
var xS;
var xCO;
var xxB;
var xxCY;
var xxS;
var xxCO;
var yLL;
var yRR;
var w;
var h;

function setup() {
    initializeFields();
    createCanvas(1000, 1000);
    background(236, 236, 235);
    img = loadImage("move.png");
    for (var i = 0; i < xL.length; i++) {
        xL[i] = 140 * i;
        xR[i] = width - 140 * i;
    }
    for (var i = 0; i < N; i++) {
        xB[i] = i * 200;
        xCY[i] = -300 + i * 200;
        xS[i] = -600 + i * 200;
        xCO[i] = -900 + i * 200;
        xxB[i] = i * 200;
        xxCY[i] = 300 + i * 200;
        xxS[i] = 600 + i * 200;
        xxCO[i] = 900 + i * 200;
        yRR[i] = 90 + i * 200;
        yLL[i] = -10 + i * 200;
        w[i] = 100;
        h[i] = 100;
    }
    for (var i = 0; i < 9; i++) {
        box[i] = loadImage("box" + i + ".png");
    }
    for (var i = 0; i < 9; i++) {
        sph[i] = loadImage("sph" + i + ".png");
    }
    for (var i = 0; i < 9; i++) {
        cyl[i] = loadImage("cyl" + i + ".png");
    }
    for (var i = 0; i < 9; i++) {
        con[i] = loadImage("con" + i + ".png");
    }
    frameRate(10);
}

function draw() {
    background(236, 236, 235);
    for (var y = -58; y <= height; y += 200) {
        for (var i = 0; i < xL.length; i++) {
            image(img, xL[i], y);
            xL[i]--;
            if (xL[i] < -1 * img.width) {
                xL[i] = xL[(i + 9) % 10] + 140;
            }
        }
    }
    for (var y = 42; y <= height; y += 200) {
        for (var i = 0; i < xR.length; i++) {
            image(img, xR[i], y);
            xR[i]++;
            if (xR[i] > width) {
                xR[i] = xR[(i + 9) % 10] - 140;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        image(box[a], xxB[i], yLL[i]);
        if (xxB[i] < 0 - w[i]) {
            xxB[i] = width + w[i];
        } else {
            xxB[i] -= 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(cyl[b], xxCY[i], yLL[i]);
        if (xxCY[i] < 0 - w[i]) {
            xxCY[i] = width + w[i];
        } else {
            xxCY[i] -= 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(sph[c], xxS[i], yLL[i]);
        if (xxS[i] < 0 - w[i]) {
            xxS[i] = width + w[i];
        } else {
            xxS[i] -= 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(con[d], xxCO[i], yLL[i]);
        if (xxCO[i] < 0 - w[i]) {
            xxCO[i] = width + w[i];
        } else {
            xxCO[i] -= 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(box[e], xB[i], yRR[i]);
        if (xB[i] > width + w[i]) {
            xB[i] = -1 * w[i];
        } else {
            xB[i] += 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(cyl[f], xCY[i], yRR[i]);
        if (xCY[i] > width + w[i]) {
            xCY[i] = -1 * w[i];
        } else {
            xCY[i] += 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(sph[g], xS[i], yRR[i]);
        if (xS[i] > width + w[i]) {
            xS[i] = -1 * w[i];
        } else {
            xS[i] += 5;
        }
    }
    for (var i = 0; i < N; i++) {
        image(con[j], xCO[i], yRR[i]);
        if (xCO[i] > width + w[i]) {
            xCO[i] = -1 * w[i];
        } else {
            xCO[i] += 5;
        }
    }
}

function mousePressed() {
    for (var i = 0; i < N; i++) {
        if ((mouseX > xxB[i] && mouseX < xxB[i] + w[i]) && (mouseY > yLL[i] && mouseY < yLL[i] + h[i])) {
            if (a == 8) {
                a = 0;
            } else {
                a++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xxCY[i] && mouseX < xxCY[i] + w[i]) && (mouseY > yLL[i] && mouseY < yLL[i] + h[i])) {
            if (b == 8) {
                b = 0;
            } else {
                b++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xxS[i] && mouseX < xxS[i] + w[i]) && (mouseY > yLL[i] && mouseY < yLL[i] + h[i])) {
            if (c == 8) {
                c = 0;
            } else {
                c++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xxCO[i] && mouseX < xxCO[i] + w[i]) && (mouseY > yLL[i] && mouseY < yLL[i] + h[i])) {
            if (d == 8) {
                d = 0;
            } else {
                d++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xB[i] && mouseX < xB[i] + w[i]) && (mouseY > yRR[i] && mouseY < yRR[i] + h[i])) {
            if (e == 8) {
                e = 0;
            } else {
                e++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xCY[i] && mouseX < xCY[i] + w[i]) && (mouseY > yRR[i] && mouseY < yRR[i] + h[i])) {
            if (f == 8) {
                f = 0;
            } else {
                f++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xS[i] && mouseX < xS[i] + w[i]) && (mouseY > yRR[i] && mouseY < yRR[i] + h[i])) {
            if (g == 8) {
                g = 0;
            } else {
                g++;
            }
        }
    }
    for (var i = 0; i < N; i++) {
        if ((mouseX > xCO[i] && mouseX < xCO[i] + w[i]) && (mouseY > yRR[i] && mouseY < yRR[i] + h[i])) {
            if (j == 8) {
                j = 0;
            } else {
                j++;
            }
        }
    }
}

function initializeFields() {
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    j = 0;
    N = 5;
    img = null;
    xL = new Array(10);
    xR = new Array(10);
    box = new Array(9);
    cyl = new Array(9);
    sph = new Array(9);
    con = new Array(9);
    xB = new Array(N);
    xCY = new Array(N);
    xS = new Array(N);
    xCO = new Array(N);
    xxB = new Array(N);
    xxCY = new Array(N);
    xxS = new Array(N);
    xxCO = new Array(N);
    yLL = new Array(N);
    yRR = new Array(N);
    w = new Array(N);
    h = new Array(N);
}

function preload() {
img = loadImage("move.png")
box[i] = loadImage("box" + i + ".png")
sph[i] = loadImage("sph" + i + ".png")
cyl[i] = loadImage("cyl" + i + ".png")
con[i] = loadImage("con" + i + ".png")
}
