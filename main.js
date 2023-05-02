function calcularNomina() {
    var salario = parseFloat(document.getElementById("salario").value);
    var horas_diurnas = parseInt(document.getElementById("horas_diurnas").value);
    var horas_nocturnas = parseInt(document.getElementById("horas_nocturnas").value);
    var horas_festivas = parseInt(document.getElementById("horas_festivas").value);
    var horas_dominicales = parseInt(document.getElementById("horas_dominicales").value);
    var dias_falto = parseInt(document.getElementById("dias_falto").value);

    // Calculamos el valor de las horas extras
    var valor_hora = salario / 240;
    var valor_hora_diurna = valor_hora * 1.25
    var valor_hora_nocturna = valor_hora * 1.35;
    var valor_hora_festiva = valor_hora * 1.75;
    var valor_hora_dominical = valor_hora * 2;

    var total_horas_diurnas = horas_diurnas * valor_hora_diurna;
    var total_horas_nocturnas = horas_nocturnas * valor_hora_nocturna;
    var total_horas_festivas = horas_festivas * valor_hora_festiva;
    var total_horas_dominicales = horas_dominicales * valor_hora_dominical;
    var total_horas_extras = total_horas_diurnas + total_horas_nocturnas + total_horas_festivas + total_horas_dominicales;
    // Calculamos el total de la nómina
    var total_dias_f = ((salario / 30) * dias_falto)
    var subtotal = (salario - total_dias_f) + total_horas_extras
    var descuentos = subtotal * 0.08;
    var total = subtotal - descuentos;
    var egresos = total_dias_f + descuentos
    // Mostramos el resultado
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    // Mostramos los resultados en la tabla
    document.getElementById("salario_mensual").innerHTML = salario.toFixed(2);
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);
    document.getElementById("descuento_salud_pension").innerHTML = (descuentos * -1).toFixed(2);
    document.getElementById("total_nomina").innerHTML = total.toFixed(2);
    document.getElementById("Tegresos").innerHTML = "$" + (egresos.toFixed(2) * -1);

    document.getElementById("valor_horas_diurnas").innerHTML = total_horas_diurnas.toFixed(2);
    document.getElementById("valor_horas_nocturnas").innerHTML = total_horas_nocturnas.toFixed(2);
    document.getElementById("valor_horas_festivas").innerHTML = total_horas_festivas.toFixed(2);
    document.getElementById("valor_horas_dominicales").innerHTML = total_horas_dominicales.toFixed(2);
    document.getElementById("valor_dias_falto").innerHTML = (((salario / 30) * dias_falto) * -1).toFixed(2);
    crearGrafico(total, egresos)
}

function crearGrafico(total, egresos) {
    // Obtener el canvas del gráfico
    var ctx = document.getElementById("grafico").getContext("2d");

    // Crear el gráfico
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pago neto', 'Impuestos y descuentos'],
            datasets: [{
                label: 'Pago neto vs impuestos y descuentos',
                data: [total, egresos],
                backgroundColor: [
                    'rgba(158, 30, 214, 0.3)',
                    'rgba(196, 11, 11, 0.3)'
                ],
                borderColor: [
                    'rgba(182, 21, 252)',
                    'rgba(238, 75, 19)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }

    });
}