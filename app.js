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
}


  

 