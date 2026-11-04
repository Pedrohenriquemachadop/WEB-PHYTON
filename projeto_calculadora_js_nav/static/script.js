function calcularSoma() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/soma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });
}

function calcularSubtracao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/subtracao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });

    
function calcularMultiplicar() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/multiplicacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText =
            "Resultado: " + data.resultado;
    });
}

function calcularDividir() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/divisao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(async res => {
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.erro);
        }

        return data;
    })
    .then(data => {
        document.getElementById("resultado").innerText =
            "Resultado: " + data.resultado;
    })
    .catch(erro => {
        document.getElementById("resultado").innerText = erro.message;
    });
}

}
