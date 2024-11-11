let operacion ="";
let primerNumero ="";

function agregarNumero(num){
    const resultado = document.getElementById('resultado');
    resultado.value += num;
}
function limpiar() {
    document.getElementById('resultado').value="";
    primerNumero=""
    operacion="";
}
function calcularResultado() {
    const segundoNumero = document.getElementById('resultado').value;
    let res;
    if (primerNumero !== '' && segundoNumero !== '' ) {
        switch (operacion) {
            case '+':
                console.log(primerNumero + segundoNumero );
                res = parseFloat(primerNumero) + parseFloat(segundoNumero);
                break;
            case '-':
                console.log(primerNumero - segundoNumero );
                res = parseFloat(primerNumero) - parseFloat(segundoNumero);
                break;
            case '*':
                console.log(primerNumero * segundoNumero );
                res = parseFloat(primerNumero) * parseFloat(segundoNumero);
                break;
            case '/':
                if(segundoNumero == 0){
                    alert("divicion sobre cero");
                    return;
                }
                res = parseFloat(primerNumero) / parseFloat(segundoNumero);
                break;
        }
        document.getElementById('resultado').value=res;
        primerNumero='';
        operacion='';
    }
}