let menuVisible = false;
//Funcion que hace que el menu se oculte y aparezca

function mostrarOcultarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList = "";
    menuVisible = false;
  }else{
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}


function seleccionar(){
  //Se oculta el menu una vez seleccionada la opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
