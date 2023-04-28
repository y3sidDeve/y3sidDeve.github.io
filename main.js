const usuario = document.getElementById("user")
const password = document.getElementById("password")
const btn = document.getElementById("boton")

const total = document.getElementById("total")

btn.addEventListener("click", () => {
    let user = usuario.value
    let pass = password.value
    usuario2.innerHTML = user
}
)
const formulario = document.querySelector('#miFormulario');
const seguroCheckbox = formulario.querySelector('#seguro');
let seguro_TR = 0;

seguroCheckbox.addEventListener('change', function () {
    seguro_TR = seguroCheckbox.checked ? parseFloat(seguroCheckbox.value) : 0;
});

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario, incluyendo seguro_TR
    console.log('Seguro:', seguro_TR);
});
const refreshButton = document.querySelector('#refresh');

		refreshButton.addEventListener('click', function() {
			location.reload();
		});

// funcion para sacar los valores

function Bmw() {
    bmwv = document.getElementById("bmw").value
    let dias = document.getElementById("dias-alquiler").value
    let subtotal = bmwv * dias
    if (dias < 3) {
        descuento = 0;
        total.setAttribute("style", "background-color: orange")
    } else if (dias < 6) {
        descuento = 0.1;
        total.setAttribute("style", "background-color: yellow")
    } else if (dias < 11) {
        descuento = 0.15;
        total.setAttribute("style", "background-color: green")
    } else {
        descuento = 0.2;
        total.setAttribute("style", "background-color: #1CC3F5")
    }
    let total1 = (subtotal - (subtotal * descuento)) * (1 + seguro_TR)

    document.getElementById("total").innerHTML = total1 + "$"

}

bmw.addEventListener("click", Bmw);

function Mercedes() {
    mercedesv = document.getElementById("mercedes").value
    let dias = document.getElementById("dias-alquiler").value
    let subtotal = mercedesv * dias
    if (dias < 3) {
        descuento = 0;
        total.setAttribute("style", "background-color: orange")
    } else if (dias < 6) {
        descuento = 0.1;
        total.setAttribute("style", "background-color: yellow")
    } else if (dias < 11) {
        descuento = 0.15;
        total.setAttribute("style", "background-color: green")
    } else {
        descuento = 0.2;
        total.setAttribute("style", "background-color: #1CC3F5")
    }
    let total1 = (subtotal - (subtotal * descuento)) * (1 + seguro_TR)
    document.getElementById("total").innerHTML = total1 + "$"
}

mercedes.addEventListener("click", Mercedes);

function Twingo() {
    twingov = document.getElementById("twingo").value
    let dias = document.getElementById("dias-alquiler").value
    let subtotal = twingov * dias
    if (dias < 3) {
        descuento = 0;
        total.setAttribute("style", "background-color: orange")
    } else if (dias < 6) {
        descuento = 0.1;
        total.setAttribute("style", "background-color: yellow")
    } else if (dias < 11) {
        descuento = 0.15;
        total.setAttribute("style", "background-color: green")
    } else {
        descuento = 0.2;
        total.setAttribute("style", "background-color: #1CC3F5")
    }
    let total1 = (subtotal - (subtotal * descuento)) * (1 + seguro_TR)
    document.getElementById("total").innerHTML = total1 + "$"
}

twingo.addEventListener("click", Twingo);

function Megane() {
    meganev = document.getElementById("megane").value
    let dias = document.getElementById("dias-alquiler").value
    let subtotal = meganev * dias
    if (dias < 3) {
        descuento = 0;
        total.setAttribute("style", "background-color: orange")
    } else if (dias < 6) {
        descuento = 0.1;
        total.setAttribute("style", "background-color: yellow")
    } else if (dias < 11) {
        descuento = 0.15;
        total.setAttribute("style", "background-color: green")
    } else {
        descuento = 0.2;
        total.setAttribute("style", "background-color: #1CC3F5")
    }
    let total1 = (subtotal - (subtotal * descuento)) * (1 + seguro_TR)
    document.getElementById("total").innerHTML = total1 + "$"
}

megane.addEventListener("click", Megane);

function Chevrolet() {
    chevroletv = document.getElementById("chevrolet").value
    let dias = document.getElementById("dias-alquiler").value
    let subtotal = chevroletv * dias
    if (dias < 3) {
        descuento = 0;
        total.setAttribute("style", "background-color: orange")
    } else if (dias < 6) {
        descuento = 0.1;
        total.setAttribute("style", "background-color: yellow")
    } else if (dias < 11) {
        descuento = 0.15;
        total.setAttribute("style", "background-color: green")
    } else {
        descuento = 0.2;
        total.setAttribute("style", "background-color: #1CC3F5")
    }
    let total1 = (subtotal - (subtotal * descuento)) * (1 + seguro_TR)
    document.getElementById("total").innerHTML = total1 + "$"
}

chevrolet.addEventListener("click", Chevrolet);
const termsCheckbox = document.querySelector('#termsCheckbox');
const submitButton = document.querySelector('#submitButton');








