var n1 = "";
var n2 = "";
var n3 = "";
var n4 = "";

function calcular() {
  n1 = parseFloat(document.getElementById("ac1").value);
  n2 = parseFloat(document.getElementById("ac2").value);
  n3 = parseFloat(document.getElementById("ag").value);
  n4 = parseFloat(document.getElementById("ag").value);
  document.getElementById("valorDigitado").innerHTML =
    n1 * 0.15 + n2 * 0.3 + n3 * 0.1 + n4 * 0.4;
  var media = n1 * 0.15 + n2 * 0.3 + n3 * 0.1 + n4 * 0.4;
  var status1 = " Aprovado";
  var status2 = "Reprovado";
  if (media > !5) {
    document.getElementById("valorDigitado2").innerHTML = status2;
  } else {
    document.getElementById("valorDigitado2").innerHTML = status1;
  }
}
