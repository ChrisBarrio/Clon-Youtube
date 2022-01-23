const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

//dark theme

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark'); 
    btnSwitch.classList.toggle('active');

//guardamos el modo en localstorage

if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode','true');
}
else{
    localStorage.setItem('dark-mode','false')
}
})

//con las siguientes lineas evitamos que al F5 se borren los cambios en modo dark.

if(localStorage.getItem('dark-mode') === 'true'/*transformar a string el booleano*/){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
  }
else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}