var api={url:"https://api.darksky.net/forecast/652763855cacc3cb5f6cf0355a404121/37.8267,-122.4233"},$tablaUno=$("#tabla-uno"),cargarPagina=function(){cargarDatos()},cargarDatos=function(){$.getJSON(api.url,function(a){a.forEach(crearDato)})};crearDato=function(a){var t=a.currently.windSpeed,r=a.currently.humidity,n=a.currently.uvIndex,e=a.currently.pressure,d=$("<tr />"),p=$("<tr />"),u=$("<tr />"),c=$("<tr />"),i=$("<td />");$windtd.text(t);var o=$("<td />");$humidity.text(r);var l=$("<td />");l.text(n);var s=$("<td />");s.text(e),d.append(i),p.append(o),u.append(l),c.append(s),$tablaUno.append(d),$tablaUno.append(p),$tablaUno.append(u),$tablaUno.append(c)};var mostrarDato=function(a){a.preventDefault(),$.post(api.url,{windSpeed:wind,humidity:humidity,unIndex:uvIndex,preassure:pressure},function(a){crearDato(a)})};$(document).ready(cargarPagina);