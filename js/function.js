function calcImc() {
    var altura = document.getElementById('altura_input').value;
    var peso = document.getElementById('peso_input').value;
    var resultadoIMc = peso / (altura * altura);
    var r = resultadoIMc.toFixed(2);
    document.getElementById('imc').innerHTML = r;


}

function resetar() {
    document.getElementById('imc').innerHTML = 0;
}