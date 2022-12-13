

var lienzo=new fabric.Canvas("lienzo")
var X=160
var Y=80
var anchoInicial=20
var altoInicial=20
var steve=""
var bloque=""
function cargarJugador(){
    fabric.Image.fromURL("steve.png",function(Img){
        steve=Img
        steve.scaleToWidth(60)
        steve.scaleToHeight(60)
        steve.set({
            top:Y,left:X
        });
        lienzo.add(steve)
    })
}
function cargarBloque(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        bloque=Img
        bloque.scaleToWidth(anchoInicial)
        bloque.scaleToHeight(altoInicial)
        bloque.set({
            top:Y,left:X
        });
        lienzo.add(bloque)
    })
}
function botones(e){
    var boton=e.keyCode
    console.log(boton)
    if(boton=="81"){
        cargarBloque("th.jpg")
    }
    if(boton=="87"){
        cargarBloque("madera.jpg")
    } 
    if(boton=="69"){
        cargarBloque("piedra.jpg")
    }
     if(boton=="82"){
        cargarBloque("madera roja.jpg")
    }
     if(boton=="84"){
        cargarBloque("lana_roja.jpg")
    }
     if(boton=="89"){
        cargarBloque("bloque_arena.jpg")
    }
     if(boton=="85"){
        cargarBloque("bloque_dinamita.jpg")
    }
     if(boton=="73"){
        cargarBloque("bloque_ladrillo.jpg")
    }
     if(boton=="79"){
        cargarBloque("bloque_oro.jpg")
    }
     if(boton=="80"){
        cargarBloque("bloquediamante.jpg")
    }
     if(boton=="65"){
        cargarBloque("lava.jpg")
    }
    if(boton=="83"){
        cargarBloque("mineral_carbon.jpg")
    }
    if(boton=="68"){
        cargarBloque("portal.jpg")
    }
    if(boton=="70"){
        cargarBloque("redstone.jpg")
    }
    if(boton=="71"){
        cargarBloque("tronco de madera.jpg")
    }
    if(boton=="86"){
        arriba()
    }
    if(boton=="78"){
        abajo()
    }
    if(boton=="74"){
        izquierda()
    }
    if(boton=="72"){
        derecha()
    }

}
function arriba(){
    if(Y>=0){
        Y=Y-altoInicial
        lienzo.remove(steve)
         cargarJugador()
    }
}
function abajo(){
    if(Y>=100){
        Y=Y+altoInicial
        lienzo.remove(steve)
         cargarJugador()
    }
}
function izquierda(){
    if(X>=0){
        X=X-anchoInicial
        lienzo.remove(steve)
         cargarJugador()
    }
}
function derecha(){
    if(X<=300){
        X=X+anchoInicial
        lienzo.remove(steve)
         cargarJugador()
    }
}

window.addEventListener("keydown", botones)