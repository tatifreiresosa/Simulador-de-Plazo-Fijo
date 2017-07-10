	var tasa = {
		nacion: 18.5,
		icbc:18.18,
		galicia: 16.5,
		frances:15.75,
		hipotecario:15.5,
		santander:15,
		macro:10.7
	};


	var formulario = document.forms[0];
	formulario.onsubmit = function(e){
		e.preventDefault();
		document.querySelector("#bloquefinal").removeAttribute("style");
		var banco = document.querySelector("#banco").value;
		var monto = parseInt(document.querySelector("#monto").value);
		var plazo = parseInt(document.querySelector("#plazo").value);
		var resultado = monto + parseInt(monto * (plazo * tasa[banco] / 365) / 100);
		document.querySelector("#texto").innerHTML =  " $ " + resultado;
		//var resultadoPorcentaje = monto * tasa[banco] / 100;
		var resultadoPorcentaje = (resultado * 100 / monto) - 100;

		document.querySelector("#texto-tasa").innerHTML = resultadoPorcentaje.toFixed(2) + " % ";

	}
