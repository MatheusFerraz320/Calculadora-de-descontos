function calcdescontos(preco , desconto) {
    return preco - (preco * (desconto / 100));
    
}
function mostrarDesconto() {
  let preco = parseFloat(document.getElementById("preco").value);
  let desconto = parseFloat(document.getElementById("desconto").value);

  if (isNaN(preco) || isNaN(desconto) || preco <= 0 || desconto < 0) {
    document.getElementById("mensagem-de-erro").textContent = "Digite valores validos"
    return;
  }

  let precoFinal = calcdescontos(preco, desconto);
  document.getElementById("resultado").textContent = "R$ " + precoFinal.toFixed(2);
  valoreconomizado(preco, precoFinal);
}



function valoreconomizado(preco , precoFinal) {
  let economia = (preco - precoFinal)
  document.getElementById ("economia").textContent = "você economizou R$" + economia.toFixed(2)
  return;
  
}

function temachange() {
  document.body.classList.toggle("dark-theme");

} 

 