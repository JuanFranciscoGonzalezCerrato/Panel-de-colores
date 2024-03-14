let formulario = document.getElementById('paletaForm');
let aviso = document.getElementById('controlDatosEntrada');
let fila = document.getElementById('filas');
let colum = document.getElementById('columnas');
let dibujar = document.getElementById('dibujarPaleta');
let borrarPaleta = document.getElementById('borrarPaleta');
let rojo = document.getElementById('rojo');
let verde = document.getElementById('verde');
let morado = document.getElementById('morao');
let azul = document.getElementById('azul');
let blanco = document.getElementById('blanco');
let contenedorPaleta = document.getElementById('contenedorPaleta');
let estadoPincel = document.getElementById('estadoPincel');

// let cuadradito = document.getElementById('cuadradito');


let colorSeleccionado = "";
let pincel = false;



contenedorPaleta.addEventListener('click', () => {
	if (pincel) {
		pincel = !pincel;
		colorSeleccionado=false;
		console.log("pincel desactivado");
		estadoPincel.innerHTML = "";
		estadoPincel.innerHTML = "Desactivado";
	} else if (!pincel) {
		pincel = !pincel;
		console.log("pincel activado");
		estadoPincel.innerHTML = "";
		estadoPincel.innerHTML = "Activado";
	}
});



rojo.addEventListener('click', () => {
	if(pincel){
	colorSeleccionado = "red";
	console.log("Has seleccionado el color " + colorSeleccionado)}
});

verde.addEventListener('click', () => {
	if(pincel){colorSeleccionado = "green";
	console.log("Has seleccionado el color " + colorSeleccionado)}
	
});

morado.addEventListener('click', () => {
	if(pincel){
		colorSeleccionado = "purple";
	console.log("Has seleccionado el color " + colorSeleccionado)}
	
});

azul.addEventListener('click', () => {
	if(pincel){
	colorSeleccionado = "blue";
	console.log("Has seleccionado el color " + colorSeleccionado)}
});

blanco.addEventListener('click', () => {
	if(pincel){
	colorSeleccionado = "white";
	console.log("Has seleccionado el color " + colorSeleccionado)}
});





formulario.addEventListener('reset', function (e) {
	e.preventDefault();
	contenedorPaleta.innerHTML = "";

	fila.disabled = false;
	colum.disabled = false;
	dibujar.style.display = 'unset';
	borrarPaleta.style.visibility = 'hidden';
	estadoPincel.innerHTML = "";
	estadoPincel.innerHTML = "Desactivado";

});
formulario.addEventListener('submit', function (e) {

	e.preventDefault();

	console.log(document.getElementById('filas').value);
	console.log(document.getElementById('columnas').value);

	if (fila.value == "" || colum.value == "") {
		aviso.style.display = 'unset';
		console.log("vacio");
	}
	if (fila.value >= 20 && fila.value < 41 && colum.value >= 20 && colum.value < 41) {
		aviso.style.display = 'none';
		fila.disabled = true;
		colum.disabled = true;
		dibujar.style.display = 'none';
		borrarPaleta.style.visibility = 'visible';
		// estadoPincel.innerHTML = "";
		// estadoPincel.innerHTML = "Activado";

		crearContenedor();
	}
});

function crearContenedor() {


	const tbl = document.createElement("table");
	const tblBody = document.createElement("tbody");



	for (let i = 0; i < fila.value; i++) {
		const row = document.createElement("tr");

		for (let j = 0; j < colum.value; j++) {
			const cell = document.createElement("td");
			// cell.setAttribute('id','cuadradito');
			cell.addEventListener("mouseenter", () => {
				console.log("cuadradito");
				cell.style.backgroundColor = colorSeleccionado;
			});
			row.appendChild(cell);
			
		}
		tblBody.appendChild(row);

	}
	tbl.appendChild(tblBody);
	contenedorPaleta.appendChild(tbl);
	tbl.setAttribute("border", "2");
}

