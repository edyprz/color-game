var colors= generaterandom(6);
/* seleccion de los elementos con la clase square, se almacena en un vector*/
var squares = document.querySelectorAll(".square");
//seleccion mor el metodo get
var colordisplay = document.getElementById("colordisplay");
//color aleatorio a elegir
var pickedcolor= randomnum();
//ligamos el h1
var h1 = document.querySelector("h1");
//ligamos los botones
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var numsq=6;

//escribe el color en el doc html
colordisplay.textContent = pickedcolor;


easy.addEventListener("click", function(){
    //reinicia el fondo del h1
    h1.style.background ="steelblue";
    hard.classList.remove("selected");
    easy.classList.add("selected");
    //genera un vector de 3 elem randoms
    colors = generaterandom(3);
    //color a elegir en game
    pickedcolor = randomnum();
    //modifica el h1
    colordisplay.textContent = pickedcolor;

    for(var i =0; i< squares.length;i++){
        if(colors[i]){
            squares[i].style.background= colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }

});

hard.addEventListener("click", function(){
    //reinicia el fondo del h1
    h1.style.background ="steelblue";
    easy.classList.remove("selected");
    hard.classList.add("selected");
        //genera un vector de 6 elem randoms
        colors = generaterandom(numsq);
        //color a elegir en game
        pickedcolor = randomnum();
        //modifica el h1
        colordisplay.textContent = pickedcolor;
    
        for(var i =0; i< squares.length;i++){
                squares[i].style.background= colors[i];
                squares[i].style.display = "block";
            }
});

reset.addEventListener("click", function(){
    this.textContent="New Colors";
    //ya existe la var colors y la funcion generarandom
    //la funcion devuelve un array de 6 elementos
    colors= generaterandom(numsq);
    //nuevo color a adivinar
    pickedcolor = randomnum();
    //cambiamos el texto del color seleccionado a adivinar
    colordisplay.textContent = pickedcolor;
    message.textContent="";
    //cambiamos los colores
    for(var i=0; i<squares.length;i++){
        squares[i].style.background = colors[i];

    }
    //reinicia el fondo del h1
    h1.style.background ="steelblue";
});


/*se hace la asignacion de colores */
for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i];
    //el mismo tiempo los ponemos a la escucha del click
    
    squares[i].addEventListener("click", function(){
        //en la var guardamos el string del color
        var clickedcolor = this.style.background;
        //comparamos el color en el caso del evento
        if(clickedcolor === pickedcolor){
            message.textContent = "Correct";
            reset.textContent= "Play Again?";
            //creamos un metodo y le pasamos el color correcto
            //todos los demas los pinta del color correcto
            changecolor(clickedcolor);
            h1.style.background = clickedcolor;
        }
        else{
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    });


}

//la funcion que cambia los colores al correcto
function changecolor(clickedcolor){
    for(var i = 0; i< colors.length;i++){
        squares[i].style.background = clickedcolor;
    }
}

//generador de random numbers
function randomnum(){
    var ran =Math.floor(Math.random() * colors.length);
    return colors[ran];
}

//funcion que llena los colores random
function generaterandom(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(random());
    }
    //se llama esta funcion 
    function random(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")";
    }
    return arr;
}