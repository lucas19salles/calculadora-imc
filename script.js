const btn = document.querySelector(".btn");

function calculadoraImc() {
  const altura = parseFloat(document.querySelector("#metros").value);
  const peso = parseFloat(document.querySelector("#peso").value);
  let resultado = document.querySelector("#resultado");
  let imc = peso / altura ** 2;
  resultado.value = imc.toFixed(2);
  console.log(imc);
  resultado.style.visibility = "visible";
  if (isNaN(altura) || isNaN(peso)) {
    alert("Caractere inválido, Por favor digite caractere númerico");
  }
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  calculadoraImc();
});
