var api = {
  url:"https://api.darksky.net/forecast/652763855cacc3cb5f6cf0355a404121/37.8267,-122.4233"
};

var $tablaUno = $("#tabla-uno"); //toma al espacio de la tablaUno

var cargarPagina = function (){
  cargarDatos();

}

var cargarDatos = function (){
  $.getJSON(api.url, function(datos){
    datos.forEach(crearDato);
  });
}

crearDato = function (dato){
  var wind = dato.currently.windSpeed;
  var humidity = dato.currently.humidity;
  var uvIndex = dato.currently.uvIndex;
  var pressure = dato.currently.pressure;

  //crea FILA wind, humdity, uv y preassure
  var $windTR = $("<tr />");
  var $humidityTR = $("<tr />");
  var $uvIndexTR = $("<tr />");
  var $preassureTR = $("<tr />");

  // crea CELDA de wind
  var $windTd = $("<td />");
  $windtd.text(wind);
  // crea celda de humidity
  var $humidityTd = $("<td />");
  $humidity.text(humidity);
  // crea celda de uvIndex
  var $uvIndexTd = $("<td />");
  $uvIndexTd.text(uvIndex);
  // crea celda de preassure
  var $pressureTd = $("<td />");
  $pressureTd.text(pressure);

  // agrega celdas a fila
  $windTR.append($windTd);
  $humidityTR.append($humidityTd);
  $uvIndexTR.append($uvIndexTd);
  $preassureTR.append($pressureTd);

  //agrega FILAS a TABLA
  $tablaUno.append($windTR);
  $tablaUno.append($humidityTR);
  $tablaUno.append($uvIndexTR);
  $tablaUno.append($preassureTR);
};

var mostrarDato = function(e){
  e.preventDefault();
  $.post(api.url, {
    windSpeed: wind,
    humidity: humidity,
    unIndex: uvIndex,
    preassure: pressure,
  }, function(dato){
    crearDato(dato);
  });
};

$(document).ready(cargarPagina);
