var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function saludar(nombre,apellido){
    console.log("Hola "+ nombre+" "+apellido);
    alert("Bienvenido "+nombre+ " "+apellido);
}
