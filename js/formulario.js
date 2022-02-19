const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #317A00'>Mensagmen enviado</span>, em breve entraremeos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style='color: #E00000'>Erro no envio</span>, voce pode enviar diretamnente para o nosso email em: forms@terragratus.com</p>";
  }
}

function enviarFormulario(e) {
  e.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
