function calcular() {

    var p = document.getElementById('v-inicial').value
    var i = document.getElementById('taxa').value
    var t = document.getElementById('periodo').value
    var a = document.getElementById('v-final')

    var montante = p * Math.pow((1 + i), t)
    var tot = montante.toString();
    a.value = tot
}
